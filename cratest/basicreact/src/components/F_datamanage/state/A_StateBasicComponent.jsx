import React, { useState } from "react";
//state -> 반응성이 있는 데이터 -> 데이터가 변경되면 화면을 리렌더링함
//useState() hooks를 사용해서 데이터를 설정
//데이터를 저장하는 저장소, 데이터를 수정하는 함수를 배열로 반환

export default function A_StateBasicComponent() {
  //useState()호출시 매개변수 인수가 초기값이 됨
  const [strData, setData] = useState("초기값");
  const [numData, setNumData] = useState(19);
  const strDataChange = (e) => {
    const v = e.target.value;
    setData(v);
  };
  return (
    <div>
      <h3>함수형 컴포넌트에서 state이용하기</h3>
      <h4>state 데이터 출력하기</h4>
      <p>
        strData : {strData} {typeof strData}
      </p>
      <p>
        numData : {numData} {typeof numData}
      </p>
      <h4>state 수정하기</h4>
      <p>
        set메소드(반환된 배열의 두 번째 값)를 이용해서 수정 set메소드가 반환하는
        값으로 state값은 덮어쓰기 함.
      </p>
      <input type="text" onChange={strDataChange} />
      <br />
      <button
        onClick={() => {
          setNumData(10);
        }}
      >
        10으로 변경
      </button>
      <br />
      <button
        onClick={() => {
          setNumData(20);
        }}
      >
        20으로 변경
      </button>
    </div>
  );
}
