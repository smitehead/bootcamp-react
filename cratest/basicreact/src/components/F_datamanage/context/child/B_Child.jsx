import React from "react";
import { ContextTest } from "../resources/Context";
export default function B_Child() {
  return (
    <div>
      <h3>B_child에서 호출하기</h3>
      <ContextTest.Consumer>{(value) => <p>{value}</p>}</ContextTest.Consumer>
    </div>
  );
}
