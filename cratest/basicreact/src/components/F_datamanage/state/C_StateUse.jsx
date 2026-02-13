import React, { useState } from "react";
import ButtonComponent from "../props/sample/ButtonComponent";
export default function C_StateUse() {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    gender: "",
  });
  const newMember = (e) => {
    const { name, value } = e.target;
    setMember((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const saveMember = (e) => {
    setMembers((members) => {
      return [...members, member];
    });
    //입력값 초기화하기
    setMember({
      id: "",
      pw: "",
      name: "",
      email: "",
      gender: "",
    });
  };
  const deleteMember = (id) => {
    return (e) => {
      //커링이라는 스킬을 써야만 delete(id) 를 사용가능함 아님 ()=>delete(id) 써야함
      setMembers((member) => {
        return member.filter((m) => m.id != id); //member의 id가 받은 아이디 값과 같은걸 빼고 반환함
      });
    };
  };
  return (
    <div>
      <h3>회원정보를 출력하기</h3>
      {/*
             회원정보 아이디, 비밀번호 이름 이메일 성별
             회원정보 다수저장 -> 저장된 내용을 출력
         */}
      <div>
        {/* 저장된 회원의 정보를 테이블로 출력 
            저장된 회원이 없으면 조회된 회원이 없습니다 출력 */}
        {members.length > 0 ? (
          <table>
            <TableHeadComponent
              header={["아이디", "이름", "이메일", "성별", "비고"]}
            />
            {/* 이렇게도 사용해서 재사용이 가능하다 */}
            {/* <thead>
              <tr>
                {Object.keys(members[0])
                  .filter((h) => h != "pw")
                  .map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                <th>비고</th>
              </tr>
            </thead> */}
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  {Object.values(member)
                    .filter((m, i) => i != 1)
                    .map((m) => (
                      <td key={m}>{m}</td>
                    ))}
                  <td>
                    <ButtonComponent
                      variant="danger"
                      size="small"
                      onClick={deleteMember(member.id)}
                    >
                      삭제
                    </ButtonComponent>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>조회된 회원이 없습니다</h3>
        )}
      </div>
      <div>
        {/* 회원정보를 저장하는 기능구현 */}
        <input type="text" name="id" onChange={newMember} value={member.id} />
        <br />
        <input type="text" name="pw" onChange={newMember} value={member.pw} />
        <br />
        <input
          type="text"
          name="name"
          onChange={newMember}
          value={member.name}
        />
        <br />
        <input
          type="text"
          name="email"
          onChange={newMember}
          value={member.email}
        />
        <br />
        <label htmlFor="">
          <input
            type="radio"
            name="gender"
            onChange={newMember}
            value="M"
            checked={member.gender == "M"}
          />
          남
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            onChange={newMember}
            value="F"
            checked={member.gender == "F"}
          />
          여
        </label>
        <button onClick={saveMember}>저장</button>
      </div>
    </div>
  );
}
