import React from "react";
import A_Child from "./child/A_Child";

export default function A_PropsDrilling({ data }) {
  return (
    <div className="border border-gray-500 p-3">
      <h3>데이터를 활용하지 않는 컴포넌트</h3>
      <A_Child data={data}></A_Child>
    </div>
  );
}
