import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderComponent from "./common/HeaderComponent";
export default function HomeComponent() {
  const infoURL = useLocation();

  return (
    <div>
    <HeaderComponent/>
      <h1>메인화면</h1>
      <p>hooks가 주는 정보 확인하기</p>
      <h3>useLocation() : url주소에 대한 정보를 가져옴</h3>
      <ul>
        <li>pathname : url경로</li>
        <li>search : ?뒤 문자열 querystring</li>
        <li>hash : url경로 뒤 #으로 설정한 값, 서버에 전송되지 않는 값</li>
        <li>state : navigate("url",{`{데이터}`})함수에서 설정한 데이터 값</li>
        <li>key : location객체의 고유값</li>
      </ul>
      <div>
        {Object.entries(infoURL).map((data, i) => {
          return (
            <p key={data[0]}>
              {data[0]} :{" "}
              {typeof data[1] == "object" ? "객체" : data[1]}
            </p>
          );
        })}
        <Link to="/?name=유병승&age=19#12345" state={{ apikey: "#5432789" }}>
          qeurystring,hash값 전달하기
        </Link><br />
        <Link
          to="/about?name=유병승&age=19#12345"
          state={{ apikey: "#5432789" }}
        >
          querystring객체로 받아서 처리하기->useSearchParams이용
        </Link>
      </div>
    </div>
  );
}
