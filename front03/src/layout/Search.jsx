import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="ค้นหา..."
          className="p-2 mr-2 rounded-l-lg border border-gray-300"
        />
        <button className="flex items-center px-4 py-2 rounded-r-lg bg-blue-500 text-white cursor-pointer w-50">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          ค้นหา
        </button>
      </div>
    </div>
  );
}
