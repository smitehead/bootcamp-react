import React from "react";
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";
//이미지가져오기
import logo from "@/assets/react.svg";
import car from "@/assets/img.jpg";
import AbatarComponent from "./AbatarComponent";
import ModalComponent from "./ModalComponent";
import { members } from "@/data/exportData.js";
import TableComponent from "./TableComponent";
export default function CommonComtainer() {
  const data = [
    {
      no: 1,
      title: "첫번째 제목",
      writer: "user01",
      content: "첫번째 내용",
      writeDate: new Date(),
    },
    {
      no: 2,
      title: "두번째 제목",
      writer: "user02",
      content: "두번째 내용",
      writeDate: new Date(),
    },
    {
      no: 3,
      title: "두번째 제목",
      writer: "user02",
      content: "두번째 내용",
      writeDate: new Date(),
    },
    {
      no: 4,
      title: "세번째 제목",
      writer: "user03",
      content: "세번째 내용",
      writeDate: new Date(),
    },
  ];

  return (
    <div>
      <h3>CardComponent 이용하기</h3>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-10">
        <CardComponent title="첫번째 카드"> 첫번째 카드컴포넌트</CardComponent>
        <CardComponent title="두번째 카드" imgSrc={logo} hightlight={true}>
          {" "}
          두번째 카드컴포넌트
        </CardComponent>
        <CardComponent title="90년대 그랜저" imgSrc={car} hightlight={false}>
          {" "}
          <h3>그래저 팝니다</h3>
          <span>3,000,000원</span>
        </CardComponent>
        <CardComponent title="90년대 그랜저" imgSrc={car} hightlight={false}>
          {" "}
          <h3>그래저 팝니다</h3>
          <span>3,000,000원</span>
          <div className="flex">
            <AbatarComponent src={car} alt={car} />
            <span>전땅크</span>
            <ButtonComponent variant="danger" size="small">
              구매하기
            </ButtonComponent>
          </div>
        </CardComponent>
      </div>
      <h3>버튼 컴포넌트 이용하기</h3>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-10">
        <ButtonComponent>기본버튼</ButtonComponent>
        <ButtonComponent variant="secondary" size="large">
          기본버튼
        </ButtonComponent>
        <ButtonComponent
          variant="warn"
          size="small"
          onClick={() => {
            alert("클릭");
          }}
        >
          기본버튼
        </ButtonComponent>
        <h3>프로필출력하기</h3>
        <AbatarComponent src={car} alt="그랜저" />
        <AbatarComponent src={car} alt="그랜저" size={100} />
        <ModalComponent isOpen={false} variant="danger">
          이제 점심먹고 하자!
        </ModalComponent>
        <h3>테이블을 생성하는 컴포넌트</h3>
        <TableComponent data={data}></TableComponent>
        <TableComponent data={members}></TableComponent>
      </div>
    </div>
  );
}
