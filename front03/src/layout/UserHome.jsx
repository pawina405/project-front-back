import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const products = [
//   {
//     id: 1,
//     name: 'หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)',
//     author: 'PHOENIX-ฟีนิกซ์',
//     category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//     price: '175.25 บาท',
//     imageSrc: '/src/pic/book.jpg',
//     alt: 'หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)',
//   },
//   {
//     id: 2,
//     name: 'การกลับมาของอลิซ เล่ม 6 (Mg)',
//     author: 'PHOENIX-ฟีนิกซ์',
//     category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//     price: '140.05 บาท',
//     imageSrc: '/src/pic/book2.jpg',
//     alt: 'การกลับมาของอลิซ เล่ม 6 (Mg)',
//   },
//   {
//     id: 3,
//     name: 'รักนี้มีไว้ให้ชายแกร่ง',
//     author: 'โมกุโมกุเร็น',
//     category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//     price: '150.25 บาท',
//     imageSrc: '/src/pic/book3.jpg',
//     alt: 'รักนี้มีไว้ให้ชายแกร่ง',
//   },
//     {
//       id: 4,
//       name: 'เล่ห์รักจับจอง (เล่ห์รัก)',
//       author: 'กานต์มณี',
//       category: 'นิยาย , นิยายโรแมนติก',
//       price: '242.10 บาท',
//       imageSrc: '/src/pic/book4.jpg',
//       alt: 'เล่ห์รักจับจอง (เล่ห์รัก)',
//     },
//     {
//       id: 5,
//       name: 'DRAGON BALL ดราก้อนบอล เล่ม 40',
//       author: 'Akira Toriyama (อากิระ โทริยามะ)',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '109.25 บาท',
//       imageSrc: '/src/pic/book5.jpg',
//       alt: 'DRAGON BALL ดราก้อนบอล เล่ม 40',
//     },
//     {
//       id: 6,
//       name: 'DRAGON BALL ดราก้อนบอล เล่ม 41',
//       author: 'Akira Toriyama (อากิระ โทริยามะ)',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '109.25 บาท',
//       imageSrc: '/src/pic/book6.jpg',
//       alt: 'DRAGON BALL ดราก้อนบอล เล่ม 41',
//     },
//     {
//       id: 7,
//       name: 'รักไม่รู้โรย (การ์ตูน)',
//       author: 'Esusuke Croe',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '114.00 บาท',
//       imageSrc: '/src/pic/book7.jpg',
//       alt: 'รักไม่รู้โรย (การ์ตูน)',
//     },
//     {
//       id: 8,
//       name: 'แกล้งนัก รักนะรู้ยัง? เล่ม 14 (การ์ตูน)',
//       author: 'Yamamoto Souichirou',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '85.50 บาท',
//       imageSrc: '/src/pic/book8.jpg',
//       alt: 'แกล้งนัก รักนะรู้ยัง? เล่ม 14 (การ์ตูน)',
//     },
//     {
//       id: 9,
//       name: 'รักไม่รู้โรย ชีวิตแสนสั้นรักกันเถิดผู้เฒ่า',
//       author: 'Esusuke Croe',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '114.00 บาท',
//       imageSrc: '/src/pic/book9.jpg',
//       alt: 'รักไม่รู้โรย ชีวิตแสนสั้นรักกันเถิดผู้เฒ่า',
//     },
//     {
//       id: 10,
//       name: 'อิคิงามิ ภาคการกลับมาของสาส์นสั่งตาย เล่ม 1',
//       author: 'Motoro MASE',
//       category: 'การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
//       price: '114.00 บาท',
//       imageSrc: '/src/pic/book10.jpg',
//       alt: 'อิคิงามิ ภาคการกลับมาของสาส์นสั่งตาย เล่ม 1',
//     },
// ]
// export default function UserHome() {
//   return (
// <div className="w-1140 h-auto">
//   <div className="text-center mt-10 mb-6">
//   <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
//   <hr className="my-5 w-4/5 mx-auto mt-10" />
//   <div className="flex justify-around">
//     <a href="#" className="text-blue-500 hover:underline mx-1">หนังสือ</a>
//     <a href="#" className="text-blue-500 hover:underline mx-1">แนะนำ</a>
//     <a href="#" className="text-blue-500 hover:underline mx-1">มาใหม่</a>
//     <a href="#" className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
//   </div>
//   <hr className="my-5 w-4/5 mx-auto mt-5" />
//   <img src="/src/pic/pomote.png" alt="pomote" className="block mx-auto mt-10 mb-6" />
// </div>

// <div className="bg-white">
//   <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-8xl lg:px-8">
//     <h2 className="sr-only">Products</h2>

//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {products.map((product, index) => (
//         <div key={product.id} className="group bg-gray-200 p-4 rounded-lg shadow-md">
//           <Link to="/product">
//             <div className="mb-2 aspect-w-1 aspect-h-1">
//               <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg" />
//             </div>
//           </Link>
//           <Link to="/product" className="block">
//             <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//           </Link>
//           <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
//           <div className="mb-2">
//             <a href="#" className="text-left text-blue-300 hover:underline mx-1">{product.author}</a>
//           </div>
//           <div className="mb-2">
//             <a href="#" className="text-left text-blue-300 hover:underline mx-1">{product.category}</a>
//           </div>
//           <div className="flex flex-row">
//             <Link to="/Item">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6">
//                 Add to cart
//               </button>
//             </Link>
//             <Link to="/Item">
//               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
//                 Buy
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// <br className="mt-20" />
// </div>

//   );
// }

export default function ProductFrom() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
      // เรียกข้อมูลสินค้าจาก API
      const fetchBooks = async () => {
        try {
          const response = await axios.get('http://localhost:8881/book/');
          setBooks(response.data);
        } catch (error) {
          console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', error);
        }
      };
  
      fetchBooks();
    }, []);

    return (
      <div className="w-1140 h-auto">
  <div className="text-center mt-10 mb-6">
  <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-around">
    <a href="#" className="text-blue-500 hover:underline mx-1">หนังสือ</a>
    <a href="#" className="text-blue-500 hover:underline mx-1">แนะนำ</a>
    <a href="#" className="text-blue-500 hover:underline mx-1">มาใหม่</a>
    <a href="#" className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-5" />
  <img src="/src/pic/pomote.png" alt="pomote" className="block mx-auto mt-10 mb-6" />
</div>
<div className="container mx-auto">
  <div className="grid grid-cols-3 gap-4 mt-3">
    {books.map((book, index) => (
      <div key={index} className="bg-white rounded-lg border p-4 max-w-xs">
        <Link to="/product"><img src={`http://localhost:8881/${book.imageUrl}`} alt={book.title} className="w-full h-120 object-cover object-center max-h-80" /></Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
          <p className="text-gray-700 mb-1">Author: {book.author_name}</p>
          <p className="text-gray-700 mb-1">Genre: {book.genre}</p>
          <p className="text-gray-700 mb-1">Published Year: {book.publishedYear}</p>
          <div className="flex justify-between items-center mt-4">
          <Link to="/Item"><button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-300">Add to Cart</button></Link>
            <span className="text-yellow-600 font-bold text-lg">฿ {book.price}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    );
    
    } 
