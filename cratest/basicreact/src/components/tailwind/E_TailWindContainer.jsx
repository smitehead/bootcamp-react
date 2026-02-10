import React from "react";
import ButtonComponent from "./sample/ButtonComponent";
import CardComponent from "./sample/CardComponent";
import InputComponent from "./sample/inputComponent";

export default function E_TailWindContainer() {
  return (
    <div>
      <h2>tailwindcss이용하기</h2>
      <h3>tailwindcss가 제공하는 클래스 이용하기</h3>
      <span className="text-2xl font-bold">스타일이 적용된 내용!</span>
      <h3>tailwindcss로 샘플 컴포넌트 만들기</h3>
      <ButtonComponent></ButtonComponent>
      <CardComponent />
      <InputComponent />
    </div>
  );
}
