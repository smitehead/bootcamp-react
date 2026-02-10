import React from "react";
// 조건문,반복문 사용하기
export default function C_UseControl() {
  const age = 19;
  const msg = "리트 조건문";
  const result = true;
  const conditionTestString = (age) => {
    let msg;
    if (age > 19) msg = "당신은 성인입니다.";
    else msg = "당신은 성인이 아닙니다.";
    return msg;
  };
  const conditionTestString2 = (age) => {
    let msg;
    if (age > 19) msg = "당신은 성인입니다.";
    else msg = "당신은 성인이 아닙니다.";
    return <h5>{msg}</h5>;
  };

  const switchTest = (cho) => {
    switch (cho) {
      case 1:
        return "1번선택";
      case 2:
        return "2번선택";
    }
  };
  const createTag = (num) => {
    const tags = [];
    for (let i = 0; i < num; i++) {
      tags.push(<p key={i}>{i}</p>);
    }
    return tags;
  };
  return (
    <div>
      <h2>조건문 사용하기</h2>
      <p>
        리액트 jsx구문에서는 조건문을 사용할 수 없다
        <br />
        {/* {} */} 내부에 if문, switch, for문을 사용할 수 없다
        <br />
      </p>
      {/* {if(age>20) <h4>{age}는 성인입니다.</h4>} */}
      {/* {
        switch(msg){

        }
    } */}
      <h3>조건문은 삼항연산자, 간편연산자를 이용할 수 있다</h3>
      {age > 20 ? <h4>당신은 성인입니다.</h4> : <h4>당신은 성인이 아닙니다</h4>}
      {msg.includes("리액트") && <h4>리액트포함</h4>}
      {msg.includes("리액트") || <h4>리액트포함안함</h4>}
      <h4>result:{result}</h4>

      <h3>
        조건문, 반복문을 사용하려면 특정값을 반환하는 함수를 만들어서 이용
      </h3>
      <h4>{conditionTestString(15)}</h4>
      {conditionTestString2(21)}
      <h5>{switchTest(1)}</h5>
      <h3>for문을 사용한 함수</h3>
      {createTag(10)}
    </div>
  );
}
