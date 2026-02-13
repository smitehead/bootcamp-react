import React from "react";

export default function AbatarComponent({ src, alt, size = 50 }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  const abatarStyle = `rounded-full object-cover`;

  return (
    <>
      <img src={src} alt={alt} style={style} className={abatarStyle} />
    </>
  );
}
