import React from "react";

export default function ButtonComponent({
  variant = "primary",
  size = "medium",
  onClick,
  children,
}) {
  const baseClass = "font-bold rounded-md transtion-all duration-200";
  const variantClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
    warn: "bg-yellow-500 text-yellow hover:bg-yellow-600 active:bg-yellow-700",
    danger: "bg-red-500 text-red hover:bg-red-600 active:bg-red-700",
  };
  //크기설정
  const sizeClass = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const className = `${baseClass} ${variantClass[variant]} ${sizeClass[size]}`;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
