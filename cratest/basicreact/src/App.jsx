// named export 가져오기
import { Test, data } from "./components/exporttest/A_namedexcport.jsx";
// default export
import DefaultExportTest from "./components/exporttest/B_DefaultExcport.jsx";
import A_ClassComponent from "./components/A_componenttest/A_ClassComponent.js";
import B_FunctionalComponent from "./components/A_componenttest/B_FunctionalComponent.js";
import A_lifecycle_class from "./components/B_lifecycle/A_lifecycle_class.jsx";
import B_lifecycle_function from "./components/B_lifecycle/B_lifecycle_function.jsx";
import A_basicjsx from "./components/C_JSX/A_basicjsx.jsx";
import B_Usejavascript from "./components/C_JSX/B_Usejavascript.jsx";
import C_UseControl from "./components/C_JSX/C_UseControl.jsx";
import D_ExportData from "./components/C_JSX/D_ExportData.jsx";
import A_basicStyle from "./components/D_style/A_basicStyle.jsx";
import B_ModulTest from "./components/D_style/B_ModulTest.jsx";
import C_StyledComponent from "./components/D_style/C_StyledComponent.jsx";
import D_StyledComponentProps from "./components/D_style/D_StyledComponentProps.jsx";
function App() {
  return (
    <>
      <h1>기본 컴포넌트 선언하기</h1>
      <h2>클래스형 컴포넌트 사용</h2>
      <A_ClassComponent title="이제 점심시간"></A_ClassComponent>
      <h2>함수형 컴포넌트 사용</h2>
      <B_FunctionalComponent></B_FunctionalComponent>
      <h1>라이프사이클 이용</h1>
      {/* <A_lifecycle_class title="test"></A_lifecycle_class> */}
      <B_lifecycle_function></B_lifecycle_function>
      <h1>jsx문법활용</h1>
      <A_basicjsx />
      <B_Usejavascript />
      <h1>jsx에서 조건문 활용하기</h1>
      <C_UseControl />
      <h1>외부데이터 가져와 컴포넌트에서 출력하기</h1>
      <D_ExportData />
      <h1>스타일 적용하기</h1>
      <A_basicStyle></A_basicStyle>
      <B_ModulTest />
      <C_StyledComponent></C_StyledComponent>
    </>
  );
}

export default App;
