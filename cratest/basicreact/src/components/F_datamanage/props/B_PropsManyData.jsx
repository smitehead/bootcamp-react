import React from "react";

export default function B_PropsManyData(props) {
  return (
    <div>
      <h3>다양한 데이터 전달받아 출력하기</h3>
      <h4>일반데이터 출력하기</h4>
      <p>strData : {props.strData}</p>
      <p>numData : {props.numData}</p>
      <p>
        isShow : {props.isShow} / isHidden : {props.isHidden}
      </p>
      {props.isShow && <h5>이거출력해</h5>}
      {props.isHidden && <h5>이거출력하지마</h5>}
      <h4>객체데이터 출력하기</h4>
      <p>배열데이터 출력</p>
      <ul>
        {props.arrData.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
      <p>객체 데이터 출력</p>
      <ul>
        {Object.entries(props.objData).map((k) => (
          <li>{`${k[0]} : ${k[1]}`}</li>
        ))}
      </ul>
    </div>
  );
}
