import React from "react";
import A_BasicProps from "./props/A_BasicProps";
import B_PropsManyData from "./props/B_PropsManyData";
import B_PropsManyData2 from "./props/B_PropsManyData2";
import C_StyleProps from "./props/C_StyleProps";

export default function DataContainer() {
  const strData = "문자열데이터";
  const numData = 19;
  const arrData = [1, 2, 3, 4, 5];
  const objData = { name: "유병승", age: 19, gender: "남" };
  const funcData = () => {
    alert("prop으로 전달한 함수");
  };
  const myStyle = {
    fontSize: "30px",
    fontWeight: "bolder",
    color: "lime",
  };
  return (
    <div>
      <h2>props데이터 이용하기</h2>
      <A_BasicProps title="banana" />
      {/* <A_BasicProps title="이건다른값이야" /> */}
      <B_PropsManyData
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
        isShow={true}
        isHidden={false}
      />
      <B_PropsManyData2
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
        isShow={true}
        isHidden={false}
      />

      <h3>스타일 props로 적용하기</h3>

      <C_StyleProps style={myStyle} />
      <C_StyleProps
        style={{
          fontSize: "19px",
          color: "magenta",
          textShadow: "2px 3px 5px orange",
        }}
      />
    </div>
  );
}
