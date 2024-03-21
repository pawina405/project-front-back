import { Link } from 'react-router-dom';
import React from 'react';

export default function Payment() {



    return(
        <div className="text-center mt-5 ">
        <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
        <hr className="my-5 w-4/5 mx-auto mt-10" />
        <div className="flex justify-around">
        <a href="#"  className="text-blue-500 hover:underline mx-1">หนังสือ</a>
          <a href="#"  className="text-blue-500 hover:underline mx-1">แนะนำ</a>
          <a href="#"  className="text-blue-500 hover:underline mx-1">มาใหม่</a>
          <a href="#"  className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
        </div>
        <hr className="my-5 w-4/5 mx-auto mt-5" />
      <div>
        <h1>รายการสินค้า/Product List</h1>

        <div className="flex justify-center mb-10">
  <div className="grid grid-cols-3 gap-4 p-4">
    <Link to="/Item"><div className="border p-2 rounded-full max-w-[15rem] bg-blue-500">
      <p className="text-center">สินค้าในตะกร้า Shopping Cart</p>
    </div></Link>
    <Link to="/Shop"><div className="border p-2 rounded-full max-w-[15rem] bg-blue-500">
      <p className="text-center">ที่อยู่จัดส่ง Shipping</p>
    </div></Link>
    <div className="border p-2 rounded-full max-w-[15rem] bg-blue-500">
      <p className="text-center">วิธีการชำระเงิน Payment</p>
    </div>
  </div>
</div>

<hr className="my-5 w-4/5 mx-auto mt-5" />

<div className="block ml-[0%] whitespace-pre-line">
 <p className="mt-4">บัญชี: a0842013735@gmail.com</p>
 <p className="mt-4">การจัดส่งสินค้า / DELIVERY</p>
</div>
<hr className="my-5 w-3/5 mx-auto mt-5" />

<div className="max-w-xl mx-auto">
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="creditCard" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="creditCard">ชำระเงินผ่านบัตรเครดิต Visa, MasterCard และ JCB</label>
  </div>
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="bankTransfer" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="bankTransfer">โอนเงินผ่านธนาคาร เคาเตอร์ธนาคาร / ตู้ เอ.ที.เอ็ม / อินเตอร์เน็ตแบงค์กิ้ง</label>
  </div>
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="cashOnDelivery" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="cashOnDelivery">เก็บเงินปลายทาง</label>
  </div>
</div>

<hr className="my-5 w-3/5 mx-auto mt-10" />
<hr className="my-5 w-3/5 mx-auto mt-10" />
<div className="text-center mt-5">
  <a href="#" className="text-whlie-500 hover:underline mx-32">รายการสินค้า</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">ราคาต่อหน่วย</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">จำนวน</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">ราคารวม</a>
</div>
<div className="text-center mt-5">
  <a href="#" className="text-whlie-500 hover:underline mx-32">Product List</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">Unit Price</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">QTY</a>
  <a href="#" className="text-whlie-500 hover:underline mx-32">Amount</a>
</div>
<hr className="my-5 w-3/5 mx-auto mt-5" />

<div className="max-w-4xl mx-auto">
  <div className="flex items-center space-x-24">
    <img src="/src/pic/book.jpg" alt="book" className="h-52 w-auto object-cover" />
    <div>
      <p>หน้าร้อนที่ฮิคารุจากไป เล่ม 1 ฉบับปรับปรุง (Mg)</p>
    </div>
    <div className="flex items-center space-x-24">
      <span className="text-lg font-bold">1</span>
      <span className="text-lg font-bold">178.25</span>
    </div>
  </div>

  <br />

  <div className="flex items-center space-x-24">
    <img src="/src/pic/book2.jpg" alt="book2" className="h-52 w-auto object-cover" />
    <div>
      <p>การกลับมาของอลิซ เล่ม 6 (Mg)</p>
    </div>
    <div className="flex items-center space-x-24">
      <span className="text-lg font-bold">1</span>
      <span className="text-lg font-bold">140.05</span>
    </div>
  </div>
</div>

<br className="mt-5"  />
<hr className="my-5 w-4/5 mx-auto mt-5" />

<div className="max-w-md mx-auto">
  <h2 className="text-lg font-semibold">Order Summary / สรุปรายการสั่งซื้อ</h2>
  <div className="flex justify-between mt-2">
    <p>ราคาค่าส่ง (Shipping Fee)</p>
    <p>0.00 บาท (฿)</p>
  </div>
  <div className="flex justify-between mt-1">
    <p>ราคารวม (Subtotal)</p>
    <p>340.00 บาท (฿)</p>
  </div>
  <div className="flex justify-between mt-1">
    <p>VAT</p>
    <p>0.00 บาท (฿)</p>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-between mt-1">
    <p>ราคาสุทธิ (Total)</p>
    <p>318.50 บาท</p>
  </div>
</div>
<br className="mt-10"  />
<Link to="/Cancel-order"><button className="bg-yellow-400 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
ดำเนิดการชำระเงิน/Pay Now
</button>
</Link>

      </div>
      <br className="mt-10"  />
      </div>
      
    )
}