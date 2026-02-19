import React from "react";
import { useMyContext } from "./resources/myprovider";
export default function D_ModuleContext() {
  // const {data,setData}=useMyContext();
  const contextData = useMyContext();
  return (
    <div>
      <h3>모듈로 전달된 데이터 출력하기</h3>
      {Object.entries(contextData.data).map((d, i) => {
        return (
          <>
            <p>
              {d[0]} : {d[1]}
            </p>
            <input
              key={`${d[0]}_${i}`}
              type="text"
              placeholder={`${d[0]}입력`}
              onChange={(e) =>
                contextData.setData((prev) => ({
                  ...prev,
                  [d[0]]: e.target.value,
                }))
              }
            />
          </>
        );
      })}
    </div>
  );
}
