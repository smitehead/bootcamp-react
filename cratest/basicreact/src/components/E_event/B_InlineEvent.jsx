import React from "react";

export default function B_InlineEvent() {
  return (
    <div className="flex flex-col space-y-5 items-center p-5">
      <h2>inline으로 이벤트 설정하고 이벤트 객체 이용하기</h2>
      <button
        className="max-w-fit"
        onClick={() => {
          alert("클릭했다!");
        }}
      >
        클릭해봐
      </button>
      <input
        className="max-w-fit"
        type="text"
        onChange={() => {
          console.log("입력함!!");
        }}
      />
      <h3>이벤트 객체 활용하기</h3>
      <p>js에서 활용했던 그거 event 객체</p>
      <input
        type="text"
        className="max-w-fit"
        onChange={(e) => {
          console.log(e);
          console.log(e.target);
          console.log(e.target.value);
          //기본 dom을 이용할 수 있다
          //리엑트에서 권장하지 않는다->데이터관리(state)를 통해 처리를 권장
          e.target.nextElementSibling.innerText = e.target.value;
        }}
      />
      <span></span>
    </div>
  );
}
