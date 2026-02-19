import React from "react";

export default function A_Child2({ data }) {
  return (
    <div className="border border-blue-500 p-7">
      <h4>A_ Child2컴포넌트</h4>
      <p>전달된 데이터 출력하기 data: {data}</p>
    </div>
  );
}
