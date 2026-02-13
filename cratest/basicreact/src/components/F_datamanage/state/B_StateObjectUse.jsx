import React, { useState } from "react";

export default function B_StateObjectUse() {
  const [arrData, setArrData] = useState([]);
  const [objData, setObjData] = useState({});
  const [count, setCount] = useState(0);
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
  //이걸 합친버전

  const changeObject = (e) => {
    const v = e.target.value;
    // const name = e.target.name; //이렇게 이름으로 구별이 가능하다!
    const { value, name } = e.target; //저걸 구조분해 해서 이렇게 하면 더 좋음
    setObjData({ ...objData, [name]: v }); //그래서 같은 변수를 사용해서 삭제가 가능함
  };

  const addCount = () => {
    setCount(count + 1); // ++가 안되는것도 비동기때문에 후위연산이 안먹어서 그럼
    //setCount(count + 1); //이렇게 2개씩 넣으면 비동기라서 첫번째거 수정한 값이 반영되지 않고 다시 0에서 1로감
    //setCount(count + 1);
    setCount((prev) => {
      return prev + 1; //<-콜백함수라서 이렇게 해줘야 동기처리가 가능하다 이러면
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
      <input
        type="text"
        name="name"
        onChange={changeObject}
        placeholder="이름입력"
      />
      <input
        type="number"
        name="age"
        onChange={changeObject}
        placeholder="나이입력"
      />
      <input
        type="text"
        name="address"
        onChange={changeObject}
        placeholder="주소입력"
      />
      <label>
        <input
          type="radio"
          name="isActive"
          onChange={changeObject}
          value="true"
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="isActive"
          onChange={changeObject}
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
