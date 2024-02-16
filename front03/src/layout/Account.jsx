import axios from "axios";
import {useState} from "react";
import Search from "./Search";

export default function Account() {


  return (
    <div className="w-1140 h-auto">
    <Search />
  <div className="text-center mt-5 ">
  <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-around">
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">ขายดี</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">แนะนำ</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">มาใหม่</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-5" />
<div>
  <h1>ประวัติของฉัน</h1>
  <hr className="my-5 w-4/5 mx-auto mt-5" />
</div>
<div className="flex-1 h-12">
  <a href="#" className="text-white hover:underline mb-2">บัญชีของฉัน</a>
  <a href="#" className="text-white hover:underline mb-2">การซื้อของฉัน</a>
  <a href="#" className="text-white hover:underline mb-2">ออกจากระบบ</a>
  </div>
</div>
</div>
  );
}
