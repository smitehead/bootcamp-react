import React from "react";
//styled로 설정된 내용은 className으로 전달됨
export default function D_StyledComponentProps(props) {
  return (
    <div className={props.className}>
      <h3>styled로 전달된 스타일을 적용하기</h3>
      <p>className:{props.className}</p>
    </div>
  );
}
