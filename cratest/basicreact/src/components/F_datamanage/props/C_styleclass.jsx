import React from "react";

export default function C_styleclass({ classStyle }) {
  return (
    <div>
      <h4>클래스로 스타일 적용하기</h4>
      <span className={classStyle.join(" ")}>전달받은 클래스 적용하기</span>
    </div>
  );
}
