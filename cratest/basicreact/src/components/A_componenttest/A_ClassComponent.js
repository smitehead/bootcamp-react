import React from "react";
//클래스형 컴포넌트 선언
// 내부에 render()메소드를 선언해야 함.
class A_ClassComponent extends React.Component {
  // 생성자를 선언할 수 있음
  // 내부에서 사용하는 데이터를 선언관리 -> props, state값 설정
  // 첫번째 줄에 super생성자를 호출
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const $p = React.createElement("p", null, `p태그 ${this.props.title}`);
    const $a = React.createElement("a", null, `a태그 ${this.state.count}`);
    return React.createElement("div", null, [$p, $a]);
    // return React.createElement("h2", null, "나의 첫번째 클래스 컴포넌트");
  }
}
export default A_ClassComponent;
