import React, { useEffect, useState } from "react";
import HeaderComponent from "./common/HeaderComponent";
import { users } from "../resources/commondata";
//동적url주소 값은 useParams()hooks를 이용
import { useParams } from "react-router-dom";

export default function UserDetailPage() {
  const param = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
    setTimeout(() => {
      const user = users.find((u) => u.id == param.id);
      setUser(user);
    }, 2000);
  }, [param]);

  return (
    <div>
      <HeaderComponent />
      <h3>동적경로 데이터 가져오기</h3>
      <h3>요청한 회원정보 출력하기</h3>
      <ul>
        {user == null ? (
          <h2>로딩중.....</h2>
        ) : (
          Object.entries(user).map((data) => (
            <li key={data[0]}>
              {data[0]} : {data[1]}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
