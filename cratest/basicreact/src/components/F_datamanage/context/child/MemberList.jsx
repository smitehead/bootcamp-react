import React, { useContext } from "react";
import { ContextChange } from "../resources/Context";
import TableBodyComponent from "../../props/sample/TableBodyComponent";
import TableHeadComponent from "../../props/sample/TableHeadComponent";
export default function MemberList({ setUserId }) {
  const { memberList } = useContext(ContextChange);
  return (
    <div>
      <table>
        <TableHeadComponent
          header={Object.keys(memberList[0]).filter((m) => m == "userId")}
        />
        {/* <TableBodyComponent
          body={memberList.map((m) => ({ userId: m.userId }))}
        /> */}
        <tbody>
          {memberList.map((m) => {
            return (
              <tr>
                <td
                  onClick={((userId) => (e) => {
                    setUserId(userId);
                  })(m.userId)}
                >
                  {m.userId}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
