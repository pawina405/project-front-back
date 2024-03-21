import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EditProfile() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำการส่งข้อมูลที่แก้ไขไปยัง API หรือทำการบันทึกข้อมูลตามที่ต้องการ
    console.log('Submitted data:', userData);
    // เมื่อบันทึกข้อมูลเสร็จสามารถ redirect ไปยังหน้า UserProfile ได้
    // โดยใช้ประโยชน์จากการใช้งาน react-router-dom
  };

  return (
    <div className="w-1140 h-auto">
      <div className="text-center mt-5">
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
          <h1>แก้ไขประวัติของฉัน</h1>
          <hr className="my-5 w-4/5 mx-auto mt-5" />
        </div>
      </div>        

      <form className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>      
      <div className="flex items-center justify-center">
  <img src="/src/pic/user.jpg" alt="user" className="rounded-full bg-white w-32 h-32" />
</div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ชื่อ</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">นามสกุล</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">หมายเลขโทรศัพท์</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ><Link to="/new">
            บันทึก
          </Link></button>
        </div>
      </form>
      <br className="mt-10" />
    </div>
  );
}
