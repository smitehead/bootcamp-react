import React from "react";

export default function ModalComponent({
  isOpen,
  onClose,
  children,
  variant = "primary",
}) {
  if (!isOpen) {
    return null;
  }
  const bgStyle =
    variant == "primary"
      ? "bg-blue-100"
      : variant == "warn"
        ? "bg-yellow-100"
        : variant == "danger"
          ? "bg-red-200"
          : "bg-gray-200";
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={
          "rounded-lg shadow-xl p-6 relative max-w-md w-full " + bgStyle
        }
      >
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800 rounded-lg"
          onClick={onClose}
        >
          &times;
        </button>
        {/* 모달내용 */}
        {children}
      </div>
    </div>
  );
}
