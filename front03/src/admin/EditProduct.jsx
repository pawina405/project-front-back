import axios from "axios";
import { useEffect, useState } from "react";

export default function EditProduct() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null); // เพิ่ม state เพื่อเก็บข้อมูลของสินค้าที่กำลังแก้ไข

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get('http://localhost:8881/book/', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProductData();
    }, []);

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleCancelEdit = () => {
        setEditingProduct(null);
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8881/book/${editingProduct.id}`, editingProduct, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log("Edit Product", response.data);

            setEditingProduct(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const productId = parseInt(id);
            await axios.delete(`http://localhost:8881/book/${productId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log("Product deleted successfully");

        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
<div>
    <h2 className="text-xl font-bold mb-4">Edit Product</h2>
    <ul>
        {products.map((product) => (
            <li key={product.id}>
                {product.name} - {product.price} 
                <button className="btn-edit" onClick={() => handleEdit(product)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
        ))}
    </ul>

    {editingProduct && (
        <div>
            <h3 className="text-lg font-bold mb-2">Edit Product</h3>
            <input 
                type="text" 
                value={editingProduct.name} 
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} 
                placeholder="Product Name" 
                className="input-field border border-gray-400 rounded px-3 py-2 mb-2"
            />
            <input 
                type="text" 
                value={editingProduct.price} 
                onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} 
                placeholder="Product Price" 
                className="input-field border border-gray-400 rounded px-3 py-2 mb-2"
            />
            <button className="btn-update px-4 py-2 rounded border border-green-500 bg-green-500 text-white font-semibold transition duration-300 ease-in-out cursor-pointer" onClick={handleUpdate}>Update</button>
            <button className="btn-cancel px-4 py-2 rounded border border-red-500 bg-red-500 text-white font-semibold transition duration-300 ease-in-out cursor-pointer" onClick={handleCancelEdit}>Cancel</button>
        </div>
    )}
</div>

    );
    
}
