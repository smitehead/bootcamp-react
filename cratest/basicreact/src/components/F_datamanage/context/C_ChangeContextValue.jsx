import React, { useContext, useState } from "react";
import { ContextChange } from "./resources/Context";

export default function C_ChangeContextValue() {
  const { data, setData } = useContext(ContextChange);
  return (
    <div>
      <h3>state와 연동된 데이터 수정하기</h3>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <h4>data : {data}</h4>
    </div>
  );
}
