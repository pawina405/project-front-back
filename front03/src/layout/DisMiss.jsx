
import React, { useState } from 'react';

export default function DisMiss () {
    const [items, setItems] = useState([
        { id: 3, name: 'หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)', price: 178.25, count: 0 },
        { id: 2, name: 'การกลับมาของอลิซ เล่ม 6 (Mg)', price: 140.05, count: 0 }
      ]);

    return(
        <div className="text-center mt-5 ">
        <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
        <hr className="my-5 w-4/5 mx-auto mt-10" />
        <div className="flex justify-around">
        <a href="#"  className="text-blue-500 hover:underline mx-1">หนังสือ</a>
          <a href="#" className="text-blue-500 hover:underline mx-1">แนะนำ</a>
          <a href="#"  className="text-blue-500 hover:underline mx-1">มาใหม่</a>
          <a href="#"  className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
        </div>
        <hr className="my-5 w-4/5 mx-auto mt-5" />

        <div className="max-w-screen-xl mx-auto p-5">
  <div className="flex gap-5">
    <div className="flex-1 border p-2 rounded-full max-w-[15rem] ">
      <p className="text-center">ทั้งหมด</p>
    </div>
    <div className="flex-1 border p-2 rounded-full max-w-[15rem]">
      <p className="text-center">การชำระเงิน</p>
    </div>
    <div className="flex-1 border p-2 rounded-full max-w-[15rem]">
      <p className="text-center">จัดเตรียมสินค้า</p>
    </div>
    <div className="flex-1 border p-2 rounded-full max-w-[15rem]">
      <p className="text-center">รับเข้าระบบขนส่ง</p>
    </div>
    <div className="flex-1 border p-2 rounded-full max-w-[15rem] bg-blue-500">
      <p className="text-center">ยกเลิกแล้ว</p>
    </div>
  </div>
</div>

<hr className="my-5 w-4/5 mx-auto mt-5" />

<div className="max-w-4xl mx-auto">
  {items.map(item => (
    <div key={item.id} className="flex items-center space-x-24">
      <img src={`/src/pic/book${item.id}.jpg`} alt={`book${item.id}`} className="h-52 w-auto object-cover" />
      <div>
        <p>{item.name}</p>
      </div>
    </div>
  ))}
</div>

<div className="grid sm:px-1 lg:px-5 xl:px-72">

<button className="bg-gary text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-gray-300">
  <i className="fas fa-times-circle mr-2"></i>ยกเลิกคำสั่งซื้อแล้ว
</button>
</div>


<br className="mt-20" />
  </div>




        
    )
}