import React from "react";

export default function CardComponent({ title, imgSrc, hightlight, children }) {
  const baseStyle =
    "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl";
  const hightlightedClass = "border-2 border-blue-500 shadow-blue-500/20";
  const cardCss = `${baseStyle} ${hightlight ? hightlightedClass : "border border-lime-200"}`;
  return (
    <div className={cardCss}>
      {imgSrc && (
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}
