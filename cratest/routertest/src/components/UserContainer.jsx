import React from "react";
import { Outlet } from "react-router-dom";
export default function UserContainer() {
  return (
    <div>
      <h3>usercontainer</h3>
      <p>
        중첩라우트를 설정했을때 지정된 컴포넌트를 출력하려면 Outlet컴포넌트를
        이용해서 출력
      </p>
      <Outlet />
    </div>
  );
}
