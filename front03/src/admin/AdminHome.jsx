import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";



export default function AdminHome() {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('http://localhost:8881/book/', {
          headers : { Authorization : `Bearer ${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData()
  }, [])
  
  return (
    <div>
      <h1>Hello ADMIN</h1>
      <AddProduct />
      <EditProduct />
    </div>
  )
}