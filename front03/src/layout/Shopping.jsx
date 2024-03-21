import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Shipping() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    subdistrict: '',
    district: '',
    province: '',
    postal_code: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำอะไรก็ตามที่คุณต้องการเมื่อกด Submit
    console.log(formData);
  };

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
        <div className="border p-2 rounded-full max-w-[15rem] bg-blue-500">
          <p className="text-center">ที่อยู่จัดส่ง Shipping</p>
        </div>
        <div className="border p-2 rounded-full max-w-[15rem]">
          <p className="text-center">วิธีการชำระเงิน Payment</p>
        </div>
      </div>
    </div>
    <hr className="my-5 w-4/5 mx-auto mt-5" />
    <p className="text-xl font-semibold text-gray-800 mb-6">บัญชี: a0842013735@gmail.com</p>
    <p className="text-xl font-semibold text-gray-800 mb-6">การจัดส่งสินค้า / DELIVERY</p>
    <hr className="my-5 w-2/5 mx-auto mt-5" />
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8 w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">ข้อมูลส่วนตัว</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm text-gray-600">ชื่อ / Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="ชื่อของคุณ" />
            </div>
            <div className="mb-6">
              <label htmlFor="surname" className="block mb-2 text-sm text-gray-600">นามสกุล / Surname</label>
              <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="นามสกุลของคุณ" />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block mb-2 text-sm text-gray-600">ที่อยู่ / Address</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="subdistrict" className="block mb-2 text-sm text-gray-600">แขวง/ตำบล / Subdistrict</label>
                <input type="text" id="subdistrict" name="subdistrict" value={formData.subdistrict} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="แขวง/ตำบล" />
              </div>
              <div>
                <label htmlFor="district" className="block mb-2 text-sm text-gray-600">เขต/อำเภอ / District</label>
                <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="เขต/อำเภอ" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="province" className="block mb-2 text-sm text-gray-600">จังหวัด / Province</label>
                <input type="text" id="province" name="province" value={formData.province} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="จังหวัด" />
              </div>
              <div>
                <label htmlFor="postal_code" className="block mb-2 text-sm text-gray-600">รหัสไปรษณีย์ / Postal code</label>
                <input type="text" id="postal_code" name="postal_code" value={formData.postal_code} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="รหัสไปรษณีย์" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="mobile" className="block mb-2 text-sm text-gray-600">เบอร์ติดต่อ / Mobile</label>
              <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="เบอร์ติดต่อของคุณ" />
            </div>
          </form>
          <div className="max-w-xl mx-auto">
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="creditCard" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="creditCard">ใช้เป็นที่อยู่หลัก</label>
  </div>
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="bankTransfer" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="bankTransfer">บันทึกที่อยู่ที่แก้ไข</label>
  </div>
</div>

<div className="max-w-xl mx-auto">
<hr className="my-5 w-5/5 mx-auto mt-5" />
  <p>รูปแบบการจัดส่งสินค้า / Delivery options</p>
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="creditCard" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="creditCard">พัสดุไปรษณีย์ธรรมดา</label>
  </div>
  <div className="flex items-center mt-4">
    <input type="radio" name="paymentMethod" id="bankTransfer" className="rounded-full h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
    <label htmlFor="bankTransfer">พัสดุไปรษณีย์ด่วนพิเศษ (EMS)</label>
  </div>
</div>
        </div>
      </div>
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
    <p> บาท (฿)</p>
  </div>
  <div className="flex justify-between mt-1">
    <p>VAT</p>
    <p>0.00 บาท (฿)</p>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-between mt-1">
    <p>ราคาสุทธิ (Total)</p>
    <p> บาท</p>
  </div>
</div>
<Link to="/Pay"><div className="mt-5">
  <button className="bg-yellow-400 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
  ขั้นตอนถัดไป Next Stap
  </button> 
</div></Link>
<br className="mt-10" />
    </div>
  );
}
