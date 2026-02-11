import React from "react";
import B_InlineEvent from "./B_InlineEvent";
import C_FunctionEvent from "./C_FunctionEvent";

export default function A_EventContainer() {
  return (
    <div>
      <h2>이벤트설정</h2>
      <B_InlineEvent></B_InlineEvent>
      <C_FunctionEvent></C_FunctionEvent>
    </div>
  );
}
