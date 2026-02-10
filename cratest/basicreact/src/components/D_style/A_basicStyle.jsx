import React from "react";
//인라인 방식으로 스타일 적용하기
//스타일 파일은 import 해서 사용
import "../../assets/css/basicstyle.css";
export default function A_basicStyle() {
  const basic = {
    backgroundColor: "yellow",
    color: "white",
    fontSize: "30px",
    width: "200px",
    heigth: "200px",
  };
  return (
    <div>
      <h2>인라인 스타일 적용하기</h2>
      <p>jsx에서 style속성에 js객체로 css를 설정한 것을 대입함</p>
      <div style={basic}>인라인으로 스타일 적용!!</div>
      <h3>css파일에 설정된 스타일 적용하기</h3>
      <p>css파일은 프로젝트 내부 src/assets/css폴더에 저장</p>
      <div className="basic">외부파일로 css불러오기</div>
    </div>
  );
}
