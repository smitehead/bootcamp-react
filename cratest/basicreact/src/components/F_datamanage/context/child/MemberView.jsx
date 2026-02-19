import React, { useContext } from "react";
import { ContextChange } from "../resources/Context";

export default function MemberView({ userId }) {
  const { memberList } = useContext(ContextChange);
  return (
    <div>
      <h3>회원정보</h3>
      {userId && (
        <ul>
          {Object.values(memberList.find((m) => m.userId == userId)).map(
            (v) => (
              <li>{v}</li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
