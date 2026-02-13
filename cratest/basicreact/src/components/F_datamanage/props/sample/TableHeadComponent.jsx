import React from "react";

export default function TableHeadComponent({ header = [] }) {
  return (
    <>
      <thead>
        <tr>
          {header.map((h, i) => (
            <th key={`${h}_${i}`}>{h}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}
