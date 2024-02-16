import React from 'react';
import Search from './Search';

export default function UserHome() {
  return (
<div className="w-1140 h-auto">
  <Search />
  <div className="text-center mt-5 ">
  <h1 className="text-4xl font-bold mt-10">หนังสือ</h1>
  <hr className="my-5 w-4/5 mx-auto mt-10" />
  <div className="flex justify-around">
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">หนังสือ</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">แนะนำ</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">มาใหม่</a>
    <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} className="text-blue-500 hover:underline mx-1">ใกล้วางจำหน่าย</a>
  </div>
  <hr className="my-5 w-4/5 mx-auto mt-5" />
  <img src="/src/pic/pomote.png" alt="pomote" className="block mx-auto mt-10" />
</div>

<div className="flex mb-4">
<div className="flex-1 bg-gray-400 h-12"></div>
  <div className="flex-1 h-12">
</div>
<div className="flex-1 h-12">
  <img src="/src/pic/book.jpg" alt="book" className="w-48 h-auto" />
 
</div>
<div className="flex-1 bg-gray-400 h-12">
   <img src="/src/pic/book2.jpg" alt="book2" className="w-48 h-auto" />
   </div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>
<div className="flex-1 bg-gray-400 h-12"></div>
</div>
</div>
  );
}
