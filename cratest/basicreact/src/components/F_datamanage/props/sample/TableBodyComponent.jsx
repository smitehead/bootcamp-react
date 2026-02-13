import React from "react";

export default function TableBodyComponent({ body = [], headersize }) {
  // if(body.length==0) return <><tbody><tr><td>없음</td></tr></tbody></>
  return (
    <>
      <tbody>
        {body.length > 0 ? (
          body.map((d, i) => {
            return (
              <tr key={i}>
                {Object.values(d).map((temp, i) => {
                  if (typeof temp == "object") {
                    return (
                      <td key={`${temp}_${i}`}>{`
                        ${temp.getFullYear()}-${(temp.getMonth() + 1).toString().padStart(2, "0")}-${temp.getDate().toString().padStart(2, "0")}`}</td>
                    );
                  } else return <td key={`${temp}_${i}`}>{temp}</td>;
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colspan={headersize}>없다</td>
          </tr>
        )}
      </tbody>
    </>
  );
}
