import React from "react";
//
export default function D_ChildComponent(props) {
  return (
    <div>
      <h3>textnode값 가져오기</h3>
      {/* <p>{props.children}</p> */}
      {typeof props.children == "object" ? (
        <h4>{Object.values(props.children)}</h4>
      ) : (
        <h4>{props.children}</h4>
      )}
    </div>
  );
}
