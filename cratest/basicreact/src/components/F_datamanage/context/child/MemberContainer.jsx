import React, { useState } from "react";
import MemberList from "./MemberList";
import MemberInput from "./MemberInput";
import MemberView from "./MemberView";
import { ContextChange } from "../resources/Context";

export default function MemberContainer() {
  const [userId, setUserId] = useState();
  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <MemberList setUserId={setUserId} />
        </div>
        <div>
          <MemberInput />
        </div>
      </div>
      <div>
        <MemberView userId={userId} />
      </div>
    </>
  );
}
