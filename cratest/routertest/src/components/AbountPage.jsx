import React from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import HeaderComponent from "./common/HeaderComponent";
// 코드로 페이지 전환 요청해보기
export default function AbountPage() {
  //쿼리스트링 값을 객체배열로 반환
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <HeaderComponent />
      <div>Link로 전환된 내용 확인하기</div>
      <p>queryString 객체로 가져오기</p>
      <p>
        querystring : {JSON.stringify(Object.fromEntries([...searchParams]))}
      </p>
      <h4>state값 출력하기</h4>
      <p>state : {JSON.stringify(useLocation().state)}</p>
    </>
  );
}
