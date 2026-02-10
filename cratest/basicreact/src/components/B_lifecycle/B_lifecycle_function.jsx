import React from "react";
// 함수형 컴포넌트에서 라이브사이클 함수 이용하기
// hooks를 이용함.
// userooo으로 명칭된 함수들...
// userEffect()함수 사용
import { useState, useEffect } from "react";
export default function B_lifecycle_function() {
  const [data, setData] = useState("초기값");

  //DidMount함수와 동일한 기능
  useEffect(() => {
    console.log("mout됨");
    return () => {
      //willUnmount함수와 동일기능
      console.log("willUnmount");
    };
  }, []);
  //DidUpdate함수와 동일한 기능
  useEffect(() => {
    console.log(`data값 수정!`);
  }, [data]);
  return (
    <div>
      <h2>함수형 컴포넌트에서 라이프사이클이용</h2>
      <p>useEffect함수를 이용</p>
      <button
        onClick={() => {
          setData((data) => data + "쉬시!");
        }}
      >
        변경
      </button>
      <p>{data}</p>
    </div>
  );
}
