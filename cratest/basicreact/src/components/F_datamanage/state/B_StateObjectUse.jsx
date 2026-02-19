import React, { useState } from "react";

export default function B_StateObjectUse() {
  const [arrData, setArrData] = useState([]);
  const [objData, setObjData] = useState({});
  const addArrData = (e) => {
    //값을 추가
    //State 값을 추가할때 항상 새로운 값을 생성해서 덮어쓰기함.
    //수정할때 비동기로 데이터를 수정함. -> 수정할때 주의!
    const v = e.target.value;
    setArrData([...arrData, v]);
  };
  const changeName = (e) => {
    setObjData({ ...objData, name: e.target.value });
  };
  const changeAge = (e) => {
    setObjData({ ...objData, age: Number(e.target.value) });
  };
  const changeAddress = (e) => {
    setObjData({ ...objData, address: e.target.value });
  };
  const isActive = (e) => {
    setObjData({ ...objData, isActive: e.target.value });
  };
  const changeObjData = (e) => {
    // const v = e.target.value;
    // const name = e.target.name;
    const { value, name } = e.target;
    setObjData({ ...objData, [name]: value });
  };
  const [count, setCount] = useState(0);
  const addCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <h3>객체, 배열 state활용하기</h3>
      <p>state에 있는 객체를 출력할때 함수를 이용해서 JSX를 만들어서 출력</p>
      <h4>배열출력하기</h4>
      <p>{arrData.length == 0 ? "배열데이터 없음" : arrData}</p>
      <h4>객체 출력</h4>
      <p>
        {Object.keys(objData).length === 0 ? "빈객체" : Object.keys(objData)}
      </p>
      <h4>배열에 값을 추가하기</h4>
      <input type="text" onChange={addArrData} />
      <h4>배열리스트로 출력하기</h4>
      <ul>
        {arrData.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <h4>객체출력하기</h4>
      <ul>
        {Object.entries(objData).map((e, i) => {
          return <li key={`${e}_${i}`}>{`${e[0]} : ${e[1]}`}</li>;
        })}
      </ul>
      <h4>객체 수정하기</h4>
      {/* 이름, 나이, 주소 isActive(true/false) */}
      <input type="text" onChange={changeName} placeholder="이름입력" />
      <input type="number" onChange={changeAge} placeholder="나이입력" />
      <input type="text" onChange={changeAddress} placeholder="주소입력" />
      <label>
        <input type="radio" name="isActive" onChange={isActive} value="true" />
        Yes
      </label>
      <label>
        <input type="radio" name="isActive" onChange={isActive} value="false" />
        No
      </label>
      <h4>한개 메소드로 처리하기</h4>
      <input
        type="text"
        name="name"
        onChange={changeObjData}
        placeholder="이름입력"
      />
      <input
        type="number"
        name="age"
        onChange={changeObjData}
        placeholder="나이입력"
      />
      <input
        type="text"
        name="address"
        onChange={changeObjData}
        placeholder="주소입력"
      />
      <label>
        <input
          type="radio"
          name="isActive"
          onChange={changeObjData}
          value="true"
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="isActive"
          onChange={changeObjData}
          value="false"
        />
        No
      </label>
      <h3>이전값 수정하기</h3>
      <h3>{count}</h3>
      <button onClick={addCount}>증가(+)</button>
    </div>
  );
}
