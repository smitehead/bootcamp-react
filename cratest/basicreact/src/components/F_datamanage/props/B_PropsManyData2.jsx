import React from "react";
//구조분해할당을 이용해서 출력하기
export default function B_PropsManyData2({
  strData,
  numData,
  isShow,
  isHidden,
  arrData,
  objData,
  funcData,
}) {
  // const {strData,numData,isShow,isHidden,arrData,objData,funcData}=props;
  return (
    <div>
      <h3>props데이터 구조분해할당으로 이용하기</h3>
      <p>strData : {strData}</p>
      <p>numData : {numData}</p>
      <ul>
        {arrData.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={funcData}>클릭하기</button>
    </div>
  );
}
