import React, { useContext } from "react";
import { ContextTest } from "./resources/Context";
export default function B_UseObject() {
  const objContext = useContext(ContextTest);

  return (
    <div>
      <h4>객체 데이터 이용하기</h4>
      <ul>
        {Object.entries(objContext).map((data, i) => {
          return (
            <li key={`${data[0]}_${i}`}>
              {data[0]} {data[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
