import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <div className="w-1140 h-auto">
        <div className="text-center mt-5 ">
        <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
        <hr className="my-5 w-4/5 mx-auto mt-10" />
        <div className="flex justify-around">
      
        <a href="#" className="text-blue-500 hover:underline mx-1">หนังสือ</a>
        <a href="#" className="text-blue-500 hover:underline mx-1">แนะนำ</a>
          <a href="#" className="text-blue-500 hover:underline mx-1">มาใหม่</a>
          <a href="#" className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
        </div>

        <hr className="my-5 w-4/5 mx-auto mt-5" />
        </div>
<div className="flex flex-col items-center justify-center">
          <img src="/src/pic/book.jpg" alt="book" className="w-48 h-auto object-contain" />
<div className="mb-2 mt-5">
  <a href="#" className="text-left text-white-500 hover:underline mx-1" >หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)</a>
</div>
<div className="mb-2">
  <a href="#" className="text-left text-blue-300 hover:underline mx-1">โมกุโมกุเร็น</a>
</div>
<div className="mb-2">
  <a href="#" className="text-left text-blue-300 hover:underline mx-1">Books</a>
</div>
  <div className="text-left mb-2" >175.25 บาท</div>
  <div className="flex flex-row">
  <Link to="/Item"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6">
    Add to cart
  </button></Link>
  <Link to="/Item"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
    Buy
  </button></Link>
</div>
</div>
<hr className="my-5 w-2/5 mx-auto mt-10" />
<div className="text-center mt-5">
  <a href="#" className="text-whlie-500 hover:underline mx-28">จำนวนหน้า</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">ประเภทสินค้า</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">น้ำหนัก</a>
</div>
<div className="text-center mt-5">
  <a href="#" className="text-whlie-500 hover:underline mx-32">128 หน้า</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">Books</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">0.191 KG</a>
</div>
<hr className="my-5 w-2/5 mx-auto mt-5" />
<div className="text-center">
<p>
  เนื้อหาเรื่อง การกลับมาของอลิซ เล่ม 6 (Mg) นำเสนอเหตุการณ์ที่เกิดขึ้นหลังจากเหตุการณ์ในเล่มก่อนหน้า
  <br />
  โดยเน้นการสืบสวนความทรมานของโยเฮ, ความกระวนกระวายของมิทานิความกังวลใจของอาโนะ,
  <br />
  และความสิ้นหวังของเคจะ รวมถึงการสอบถามว่ามีหนทางใดที่ช่วยให้แต่ละคนหลุดพ้นจาก ขุมนรก ได้บ้างหรือไม่
</p>
</div>
</div>
    );  
} 
