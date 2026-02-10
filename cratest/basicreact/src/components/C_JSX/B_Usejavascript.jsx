import React from "react";
//  javascript구문 사용하기
const outerValue = "외부데이터";

export default function B_Usejavascript() {
  //자료형별 변수 선언하기
  const name = "bslove";
  let age = 19;
  const height = [180.5, 177.3, 163.2, 171.4, 166.8];
  const person = {
    name: "오수환",
    age: 25,
    address: "울산광역시",
  };
  const students = [
    { name: "홍길동", grade: 1, classNum: 2, gender: "남" },
    { name: "홍길은", grade: 2, classNum: 3, gender: "여" },
    { name: "홍길금", grade: 3, classNum: 4, gender: "남" },
  ];
  return (
    <div>
      <h2>변수출력하기</h2>
      <h4>이름 : {name}</h4>
      <h4>나이 : {age}</h4>
      {/* 배열 출력하기 */}
      <h4>키 : {height}</h4>
      {/* 객체 출력하기 */}
      {/* <h4>사람 : {person}</h4> */}
      <h4>사람 : {Object.values(person)}</h4>
      {/* 일반적으로 배열을 출력할때는 배열함수 map()이용 */}
      <h3>배열, 객체 데이터 출력하기</h3>
      <p>배열이나 객체가 제공하는 함수를 이용해서 각 데이터를 출력</p>
      <ul>
        <li>{height[0]}</li>
        <li>{height[1]}</li>
        <li>{height[2]}</li>
        <li>{height[3]}</li>
      </ul>
      <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person["address"]}</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>학년</th>
            <th>반</th>
            <th>성별</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{students[0].name}</td>
            <td>{students[0].grade}</td>
            <td>{students[0].classNum}</td>
            <td>{students[0].gender}</td>
          </tr>
        </tbody>
      </table>
      <h3>배열함수를 이용하기</h3>
      <p>반복해서 출력하는 jsx태그에는 key속성을 중복값 없이 설정</p>
      <ul>
        {height.map((h, i) => (
          <li key={`${i}_${h}`}>{h}</li>
        ))}
      </ul>
      <p>180이상 키만 출력</p>
      <h4>filter / map이용해서 원하는 데이터만 출력</h4>
      <ul>
        {height
          .filter((h) => h >= 180)
          .map((h) => (
            <li key={`${h}`}>{h}</li>
          ))}
      </ul>
      <h4>객체 출력하기</h4>
      <p>
        Object.values() / Object.keys() 메소드 이용 Object.entries()이용할 수
        있음
      </p>
      <p>person출력하기</p>
      <div>
        {Object.values(person).map((p, i) => (
          <p key={`${i}_${p}`}>{p}</p>
        ))}
      </div>
      <h4>테이블로 students출력하기</h4>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>학년</th>
            <th>반</th>
            <th>성별</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            return (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.grade}</td>
                <td>{s.classNum}</td>
                <td>{s.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>함수로 만들기</h4>
      <table>
        <thead>
          <tr>
            {Object.keys(students[0]).map((k) => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            return (
              <tr>
                {Object.values(s).map((ss) => (
                  <td key={ss}>{ss}</td>
                ))}
              </tr>
            );
            // const student = Object.values(s);
            // return (
            //   <tr key={`${s.name}_${s.grade}`}>
            //     {student.map((ss) => (
            //       <td key={ss}>{ss}</td>
            //     ))}
            //   </tr>
            // );
          })}
        </tbody>
      </table>
      <h4>함수 외부에 선언된 변수 가져오기</h4>
      <p>{outerValue}</p>
      <button
        onClick={() => {
          age++;
          console.log(age);
        }}
      >
        증가
      </button>
      <h3>{age}</h3>
    </div>
  );
}
