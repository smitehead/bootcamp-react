import React from "react";
//부모컴포넌트에서 전달한 props데이터는 함수형컴포넌트의 매개변수로 받을 수 있다.
// export default function A_BasicProps(props) {

//props객체를 구조분해할당으로 전달받기
//const {title}={title:"props데이터"};
export default function A_BasicProps({ title }) {
  const changeProps = () => {
    // props.title += "변경하기";
  };
  return (
    <div>
      <h3>함수형컴포넌트에서 props값 이용</h3>
      <p>매개변수로 props를 선언해서 값을 이용</p>
      {/* <p>{props.title}</p> */}
      <p>{title}</p>
      <button onClick={changeProps}>props수정해보기</button>
    </div>
  );
}
