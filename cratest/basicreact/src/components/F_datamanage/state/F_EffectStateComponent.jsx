import React, { useState, useEffect } from "react";
import EffectDebouncerComponent from "./sample/EffectDebouncerComponent";

export default function F_EffectStateComponent() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  //useEffect ->페이지가 랜더링 될때마다 실행! -> 이러면 모든 순간 처리
  useEffect(() => {
    console.log("실행됨!!!!!!!");
  });
  //여기서 ,[]) <-이걸 넣으면 한번만 실행됨
  useEffect(() => {
    console.log("데이터 수정됨!!");
  }, [data]);
  //},[data]) 이렇게 넣으면 state데이터인 data값이 변경되면 실행되는 함수가됨
  const changeData = (e) => {
    setData(e.target.value);
  };
  const changeData2 = (e) => {
    setData2(e.target.value);
  };
  return (
    <div>
      <h3>data수정하기</h3>
      <input type="text" name="data" onChange={changeData} />
      <h4>data : {data}</h4>
      <input type="text" name="data" onChange={changeData2} />
      <h4>data2 : {data2}</h4>
      <EffectDebouncerComponent />
    </div>
  );
}
