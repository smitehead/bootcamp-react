import React from "react";
//구조분해할당
export default function D_ChildJSXComponent({ children }) {
  //children속성에 전달된 값을 별도로 이용하기
  // 전달된 데이터가 단일값일때 React.Children.toArray()함수를 이용해서 변환해줌
  const [val, val1, val2, ...other] = Array.isArray(children)
    ? children
    : React.Children.toArray(children);
  return (
    <div>
      <h3>text노드 구조분해할당으로 가져오기</h3>
      <div>
        val : {val}
        val1 : {val1}
        val2 : {val2}
        other:{other}
      </div>
    </div>
  );
}
