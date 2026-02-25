import React from "react";
import { users } from "../resources/commondata";
import { Link } from "react-router-dom";

export default function UserListComponent() {
  return (
    <div>
      <h3>회원리스트</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(users[0]).map((k) => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={`${user.id}`}>
                {Object.values(user).map((v, i) => {
                  if (typeof v === "boolean")
                    return <td>{v ? "활성" : "비활성"}</td>;
                  return (
                    <td key={`${v}_${i}`}>
                      {i == 1 ? <Link to={`/users/${user.id}`}>{v}</Link> : v}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
