import React from "react";
import "../../assets/css/nonmodule.css";
import header from "../../assets/css/header.module.css";
import footer from "../../assets/css/footer.module.css";

export default function B_ModulTest() {
  return (
    <div>
      <h3 className="title">스타일적용하기</h3>
      <h2>모듈스타일 적용하기</h2>

      <div className={header.container}>header</div>
      <div className={footer.container}>footer</div>
    </div>
  );
}
