import React, { useContext } from "react";
import { ContextTest } from "./resources/Context.js";

//제공하는 hook을 이용해서 context데이터 활용하기

export default function B_UseContext_Hook() {
  //ContextTest에서 설정한 value값을 반환함.
  const contextData = useContext(ContextTest);
  return (
    <div>
      <h3>hooks를 이용해서 Context 활용하기</h3>
      <h4>ContextData value : {contextData}</h4>
    </div>
  );
}
