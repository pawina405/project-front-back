import React from 'react';

export default function Search() {
  return (
    <form className="max-w-md mx-auto mt-10">   
    <label className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
    <div className="relative">
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50" placeholder="Search ..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
  );
}
