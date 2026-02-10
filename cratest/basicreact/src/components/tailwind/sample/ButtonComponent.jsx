import React from "react";

export default function ButtonComponent() {
  return (
    <div className="space-x-10">
      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:scale-105 transition-tranform duration-300">
        클릭하기
      </button>

      <button className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded line-flex items-center justify-center">
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20vH0v-2z" />
        </svg>
        <span>다운로드</span>
      </button>
    </div>
  );
}
