import React from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponent from "./TableBodyComponent";

export default function TableComponent({ data }) {
  // data.속성명
  return (
    <div>
      <table>
        <TableHeadComponent header={Object.keys(data[0])} />
        <TableBodyComponent
          body={data}
          headersize={Object.keys(data[0]).length}
        />
      </table>
    </div>
  );
}
