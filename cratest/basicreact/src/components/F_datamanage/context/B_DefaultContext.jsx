import React, { useContext } from "react";
import { ContextDefault } from "./resources/Context";
import TableHeadComponent from "../props/sample/TableHeadComponent";
import TableBodyComponent from "../props/sample/TableBodyComponent";
export default function B_DefaultContext() {
  const contextData = useContext(ContextDefault);
  return (
    <div>
      <h3>hooks로 가져오기</h3>
      <TableHeadComponent header={Object.keys(contextData)} />
      <TableBodyComponent body={[contextData]} />
      <h3>태그로 default값 가져오기</h3>
      <ContextDefault.Consumer>
        {(value) => {
          return Object.entries(value).map((d, i) => {
            return (
              <p key={i}>
                {d[0]} {d[1]}
              </p>
            );
          });
        }}
      </ContextDefault.Consumer>
    </div>
  );
}
