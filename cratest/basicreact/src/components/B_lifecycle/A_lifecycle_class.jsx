import React, { Component } from "react";

export default class A_lifecycle_class extends Component {
  constructor(props) {
    super(props);
    console.log("생성자호출");
    this.state = {
      checkVal: "check!!",
    };

    this.testDidUpdate = this.testDidUpdate.bind(this);
  }
  // 생명주기함수를 선언하기
  static getDerivedStateFromProps(props, state) {
    // Component가 생성되기 전, 수정되고, shouldComponentUpdate()함수 호출전
    console.log(`getDerivedStateFormProps호출`);
    console.log(`props : `, props);
    console.log(`state : `, state);
    // state속성에 추가되는 값
    return { test: "생명주기 함수에서 추가" };
  }
  //컴포넌트가 마운트된 이후 실행하는 함수
  componentDidMount() {
    console.log(`componentDidMount함수 실행!`);
    console.log(this.props);
    console.log(this.state);
  }
  //컴포넌트가 가지고 있는 데이터를 수정했을때
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(`props : `, prevProps);
    console.log(`prevState : `, prevState);
    console.log(`snapshot : `, snapshot);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount실행`);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //가상DOM에 출력한 후 호출
    console.log("getSnapshotBeforeUpdate 메소드 호출");
    console.log(`props : `, prevProps);
    console.log(`prevState : `, prevState);
    return null;
  }
  testDidUpdate() {
    this.setState((prevState) => {
      return { checkVal: prevState.checkVal + "check" };
    });
  }
  render() {
    console.log("render함수 호출");
    return (
      <div>
        <h2>클래스형 컴포넌트 라이프사이클 확인</h2>
        <button onClick={this.testDidUpdate}>클릭</button>
        <>
          {Object.entries(this.state).map((k, v) => {
            return (
              <p key={k}>
                {k} {v}
              </p>
            );
          })}
        </>
      </div>
    );
  }
}
