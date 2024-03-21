import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function AddItem() {
  // สร้างตัวแปรสถานะสำหรับแต่ละรายการสินค้าและราคา
  const [items, setItems] = useState([
    { id: 3, name: 'หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)', price: 178.25, count: 0 },
    { id: 2, name: 'การกลับมาของอลิซ เล่ม 6 (Mg)', price: 140.05, count: 0 }
  ]);

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  const increment = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  // ฟังก์ชันลดจำนวนสินค้า
  const decrement = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    });
  };

  const handleDeleteAll = () => {
    // เซ็ตจำนวนสินค้าทั้งหมดให้เป็น 0
    setItems(prevItems => prevItems.map(item => ({ ...item, count: 0 })));
  };

  // คำนวณราคารวม
  const total = items.reduce((acc, item) => acc + (item.price * item.count), 0);

  return (
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

      <h1>รายการสินค้า/Product List</h1>

      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="border p-2 rounded-full max-w-[15rem] bg-blue-500">
            <p className="text-center">สินค้าในตะกร้า Shopping Cart</p>
          </div>
          <div className="border p-2 rounded-full max-w-[15rem]">
            <p className="text-center">ที่อยู่จัดส่ง Shipping</p>
          </div>
          <div className="border p-2 rounded-full max-w-[15rem]">
            <p className="text-center">วิธีการชำระเงิน Payment</p>
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
            <div className="flex items-center space-x-24">
              <div className="rounded-full border border-gray-400 h-8 w-8 flex items-center justify-center bg-red-500" onClick={() => decrement(item.id)}>
                <span className="text-lg font-bold">-</span>
              </div>
              <span className="text-lg font-bold">{item.count}</span>
              <div className="rounded-full border border-gray-400 h-8 w-8 flex items-center justify-center bg-green-500" onClick={() => increment(item.id)}>
                <span className="text-lg font-bold">+</span>
              </div>
              <span className="text-lg font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5 w-4/5 mx-auto mt-10" />

      <div className="max-w-md mx-auto">
        <h2 className="text-lg font-semibold">Order Summary / สรุปรายการสั่งซื้อ</h2>
        <div className="flex justify-between mt-2">
          <p>ราคาค่าส่ง (Shipping Fee)</p>
          <p>0.00 บาท (฿)</p>
        </div>
        <div className="flex justify-between mt-1">
          <p>ราคารวม (Subtotal)</p>
          <p>{total.toFixed(2)} บาท (฿)</p>
        </div>
        <div className="flex justify-between mt-1">
          <p>VAT</p>
          <p>0.00 บาท (฿)</p>
        </div>
        <hr className="my-5 w-4/5 mx-auto mt-10" />
        <div className="flex justify-between mt-1">
          <p>ราคาสุทธิ (Total)</p>
          <p>{total.toFixed(2)} บาท</p>
        </div>
      </div>
      <Link to="/Shop"><div className="mt-5">
        <button className="bg-yellow-400 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
          ยืนยันคำสั่งซื้อ
        </button>
      </div></Link>
      <br className="mt-10" />
    </div>
  );
}
