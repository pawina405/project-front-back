import axios from "axios";
import {useState} from "react";

export default function ProductForm() {
    const [product, setProduct] = useState({
        author_name: "",
        title: "",
        genre: "",
        publishedYear: "",
        price: "",
        imageUrl: null,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };

    const handleFileChange = (e) => {
        setProduct({...product, imageUrl: e.target.files[0]});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in product) {
            formData.append(key, product[key]);
        }

        try {
            const response = await axios.post("http://localhost:8881/book/addbooks", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Product created successfully");
        } catch (error) {
            console.error(error);
            alert("Error creating product");
        }
    };

    return (
<div className="p-10 border w-full md:w-6/12 min-w-[400px] max-w-[50%] max-h-[1069px] mx-auto mt-10 text-center rounded-lg bg-white shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Product Form</h1>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
            <span className="text-gray-700">Book Image</span>
            <input type="file" name="imageUrl" onChange={handleFileChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        </label>
        <label className="flex flex-col">
            <span className="text-gray-700">Book Name</span>
            <input type="text" name="title" value={product.title} onChange={handleChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        </label>
        <label className="flex flex-col">
            <span className="text-gray-700">Author Name</span>
            <input type="text" name="author_name" value={product.author_name} onChange={handleChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        </label>
        <label className="flex flex-col">
            <span className="text-gray-700">Book Type</span>
            <select name="genre" value={product.genre} onChange={handleChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="นิตยสาร">นิตยสาร</option>
                <option value="หนังสือ">หนังสือ</option>
                <option value="มังงะ">มังงะ</option>
                <option value="อีบุ๊ค">อีบุ๊ค</option>
            </select>
        </label>
        <label className="flex flex-col">
            <span className="text-gray-700">Published Year</span>
            <input type="number" name="publishedYear" value={product.publishedYear} onChange={handleChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        </label>
        <label className="flex flex-col">
            <span className="text-gray-700">Price</span>
            <input type="number" name="price" value={product.price} onChange={handleChange} className="py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        </label>
        <button type="submit" className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
    </form>
</div>

    );
}
