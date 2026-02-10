import React from "react";
import reactLogo from "@/assets/react.svg";

export default function CardComponent() {
  return (
    <div className="group max-w-sm mx-auto bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_20px_40px_rgba(255,214,0,0.2)] transition-all duration-500 border border-gray-100">
      <div className="bg-yellow-50 p-8 flex justify-center items-center group-hover:bg-yellow-100 transition-colors duration-500">
        <img
          className="w-32 h-32 object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
          src={reactLogo}
          alt="Banana Human React"
        />
      </div>

      <div className="p-8 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-yellow-700 uppercase bg-yellow-200 rounded-full">
          Banana Human 🍌
        </span>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          저는 바나나인간입니다
        </h2>

        <p className="text-gray-500 leading-relaxed italic">
          "Tailwind CSS 적용 힘들다..."
        </p>

        <button className="mt-8 w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-yellow-400 hover:text-gray-900 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-yellow-200">
          공부 제발 그만
        </button>
      </div>
    </div>
  );
}
