import React from "react";
import { ContextTest } from "./resources/Context";
import B_Child from "./child/B_Child";
//태그방식으로 context를 가져와 사용하기
//예) Test.Consumer태그로 전달된 데이터를 활용
export default function B_UseContext_Tag() {
  return (
    <div>
      <h3>태그 방식으로 contexte데이터 가져오기</h3>
      <p>
        Context명.Consumer태그를 이용해서 value값을 받는 함수로 데이터를
        가져온다.
      </p>
      <ContextTest.Consumer>
        {(value) => {
          return <h4>basicData : {value}</h4>;
        }}
      </ContextTest.Consumer>
      <B_Child />
    </div>
  );
}
