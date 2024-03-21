import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...userData });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData({ ...editedData });
    localStorage.setItem("userData", JSON.stringify(editedData));
    setIsEditing(false);
  };
  return (
    <div className="w-1140 h-auto">
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
          <h1>ประวัติของฉัน</h1>
          <hr className="my-5 w-4/5 mx-auto mt-5" />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img src="/src/pic/user.jpg" alt="user" className="rounded-full  bg-black-100" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center mt-5">
              <span className="text-gray-400 mr-10">ชื่อผู้ใช้</span>
              {isEditing ? (
                <input
                  type="text"
                  className="input input-bordered"
                  name="username"
                  value={editedData.username}
                  onChange={handleInputChange}
                />
              ) : (
                <span className="text-gray-500">{userData.username}</span>
              )}
            </div>
            <div className="flex items-center mt-5">
              <span className="text-gray-400 mr-10">ชื่อ</span>
              {isEditing ? (
                <input
                  type="text"
                  className="input input-bordered"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                />
              ) : (
                <span className="text-gray-1=500">{userData.name}</span>
              )}
            </div>
            <div className="flex items-center mt-5">
              <span className="text-gray-400 mr-10">อีเมล</span>
              {isEditing ? (
                <input
                  type="email"
                  className="input input-bordered"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span className="text-gray-500">{userData.email}</span>
              )}
            </div>
            <div className="flex items-center mt-5">
              <span className="text-gray-400 mr-10">หมายเลขโทรศัพท์</span>
              {isEditing ? (
                <input
                  type="text"
                  className="input input-bordered"
                  name="phone"
                  value={editedData.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <span className="text-gray-500">{userData.phone}</span>
              )}
            </div>
            <div className="flex items-center justify-center space-x-2 mt-10">
                  <Link to="/edit-profile" className="font-bold hover:underline">แก้ไข</Link>
                  <img src="/src/pic/edit.png" alt="edit" className="w-10 h-10" onClick={handleEdit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
