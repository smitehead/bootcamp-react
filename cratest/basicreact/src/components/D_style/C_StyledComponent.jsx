import React from "react";
//styled-components 라이브러리 이용해서 스타일이 적용된 컴포넌트 이용하기
import styled from "styled-components";
import D_StyledComponentProps from "./D_StyledComponentProps";
import E_TailWindContainer from "../../components/tailwind/E_TailWindContainer";
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  border: 1px solid red;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: lightgray;
`;

//스타일 재사용하기
//styled.태그명`` ->  styled(선언된 styled컴포넌트)`스타일지정`;
//기존 styledcomponent에 추가 스타일을 적용할때
const ContainerRight = styled(Container)`
  justify-content: right;
  align-items: end;
  height: 80px;
`;
const TitleBlack = styled(Title)`
  color: black;
  margin: 0;
  padding: 0;
`;

const OtherComponentStyle = styled(D_StyledComponentProps)`
  font-size: 25px;
  background-color: cyan;
  color: lime;
`;
export default function C_StyledComponent() {
  return (
    <div>
      <h2>style-components를 이용하기</h2>
      <Container>styled.div</Container>
      <Title>나는 제목이야</Title>
      <Container>
        <Title>바나나 나나바 바나나나나</Title>
      </Container>
      <ContainerRight>
        <TitleBlack>새로운 컨테이너에 타이틀</TitleBlack>
      </ContainerRight>
      <h2>생성한 컴포넌트에 적용하기</h2>
      <p>
        생성한 컴포넌트에 적용하려면 props와 같이 사용 styled에서 설정한 style을
        props로 전달이 됨. 그 props를 이용해서 생성한 컴포넌트에 적용을 하는
        방식
      </p>
      <D_StyledComponentProps />
      <OtherComponentStyle />

      <E_TailWindContainer></E_TailWindContainer>
    </div>
  );
}
