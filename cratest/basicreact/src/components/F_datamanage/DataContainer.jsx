import React from "react";
import A_BasicProps from "./props/A_BasicProps";
import B_PropsManyData from "./props/B_PropsManyData";
import B_PropsManyData2 from "./props/B_PropsManyData2";
import C_StyleProps from "./props/C_StyleProps";
import C_styleclass from "./props/C_styleclass";
import D_ChildComponent from "./props/D_ChildComponent";
import D_ChildJSXComponent from "./props/D_ChildJSXComponent";
import CommonComtainer from "./props/sample/CommonComtainer";
import A_StateBasicComponent from "./state/A_StateBasicComponent";
import B_StateObjectUse from "./state/B_StateObjectUse";
import C_StateUse from "./state/C_StateUse";
import D_StateSendUse from "./state/D_StateSendUse";

import E_LodingTest from "./state/E_LodingTest";
import F_EffectStateComponent from "./state/F_EffectStateComponent";

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
  const classStyle = ["text-3xl", "text-lime-200"];
  const classStyle2 = [
    "text-center",
    "bg-gradient-to-r from-lime-500 to-white-200",
    "w-fit",
  ];
  return (
    <div>
      <h2>props데이터 이용하기</h2>
      <A_BasicProps title="props데이터" />
      {/* <A_BasicProps title="이건다른값이야" /> */}
      <B_PropsManyData
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
        isShow={true}
        isHidden={true}
      />
      <B_PropsManyData2
        strData={strData}
        numData={numData}
        arrData={arrData}
        objData={objData}
        funcData={funcData}
        isShow={true}
        isHidden={true}
      />
      <h3>스타일 props로 적용하기</h3>
      <C_StyleProps style={myStyle} />
      <C_StyleProps
        style={{
          fontSize: "18px",
          color: "magenta",
          textShadow: "2px 3px 5px orange",
        }}
      />
      <C_styleclass classStyle={classStyle} />
      <C_styleclass classStyle={classStyle2} />

      <h3>컴포넌트의 children props가져오기</h3>
      <p>
        컴포넌트의 시작태그와 끝태그 사이에 작성하는 값을 props의
        children속성으로 저장함 자식컴포넌트에서 props.children으로 가져와
        활용할 수 있다.
      </p>
      <D_ChildComponent>기본 children값</D_ChildComponent>
      <D_ChildComponent>{10}</D_ChildComponent>
      <D_ChildComponent>{["가", "나", "다", "라"]}</D_ChildComponent>
      <D_ChildComponent>{objData}</D_ChildComponent>
      <h3>jsx데이터 전달하기</h3>
      <D_ChildJSXComponent>이것도 받아보세요!</D_ChildJSXComponent>
      <D_ChildJSXComponent>
        <span>이것도 받아보세요!</span>
      </D_ChildJSXComponent>
      <D_ChildJSXComponent>
        <span style={{ color: "coral" }}>나는 span이야</span>
        <p className={classStyle.join(" ")}>나는 p태그야</p>
        <p className={classStyle2.join(" ")}>나는 두번째 p태그야</p>
      </D_ChildJSXComponent>
      <h2>공통컴포넌트를 만들어 활용하기</h2>
      <CommonComtainer />
      <h1>state데이터 이용하기</h1>
      <A_StateBasicComponent></A_StateBasicComponent>
      <B_StateObjectUse />
      <C_StateUse />
      <D_StateSendUse />
      <E_LodingTest />
      <F_EffectStateComponent />
    </div>
  );
}
