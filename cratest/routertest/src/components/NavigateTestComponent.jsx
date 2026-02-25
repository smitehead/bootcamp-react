import React from "react";
import { useNavigate } from "react-router-dom";
export default function NavigateTestComponent() {
  const navigate = useNavigate();
  const movePath = () => {
    //매개변"수에 이동한 주소를 전달
    navigate("/about");
  };
  const moveObj = () => {
    navigate({
      pathname: "/about",
      search: "?value=test&num1111",
      hash: "#h1g2f3",
    });
  };
  const moveState = () => {
    navigate("/about", { state: { id: "admin" } });
  };
  const moveIndex = () => {
    navigate(-1); //이전페이지
    //navigate(1);
  };
  return (
    <div>
      <h3>useNavigate훅을 이용해서 이벤트와 연결해서 페이지 이동하기</h3>
      <div>
        <button onClick={movePath}>경로를 설정해서 이동하기</button>
        <button onClick={moveObj}>객체를 설정해서 이동하기</button>
        <button onClick={moveState}>state데이터 전달하며 이동하기</button>
        <button onClick={moveIndex}>index번호로 이동하기</button>
      </div>
    </div>
  );
}
