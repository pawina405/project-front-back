import { Link } from 'react-router-dom';

export default function CancelOrder () {

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
    <div className="flex-1 border p-2 rounded-full max-w-[15rem] bg-blue-500">
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
    <div className="flex-1 border p-2 rounded-full max-w-[15rem]">
      <p className="text-center">ยกเลิกแล้ว</p>
    </div>
  </div>
</div>


<div className="grid sm:px-1 lg:px-5 xl:px-72">
<div className="px-4 pt-8">
    <div className="mt-2 space-y-2 rounded-md border bg-white px-1 py-2 sm:px-2 sm:py-2">
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover" src="/src/pic/book.jpg" alt="book" />
        <div className="flex w-full flex-col px-4 py-4">
          <p className="text-lg font-bold">$138.99</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="/src/pic/book2.jpg" alt="book2" />
        <div className="flex w-full flex-col px-4 py-4">
          <p className="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="grid sm:px-1 lg:px-5 xl:px-72">
<div className="px-4 pt-8">
<div className="mt-2 space-y-2 rounded-md border bg-white px-1 py-2 sm:px-2 sm:py-2">
<button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-gray-300 mr-5">
  <i className="fas fa-hourglass-half mr-2"></i>รอการอนุมัติ
</button>

<Link to="/Cancel"><button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-gray-300">
  <i className="fas fa-times-circle mr-2"></i>ยกเลิกคำสั่งซื้อ
</button></Link>
</div>
</div>
    </div>
<br className="mt-20" />
  </div>




        
    )
}