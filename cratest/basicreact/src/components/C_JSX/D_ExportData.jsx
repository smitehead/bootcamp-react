import React from "react";
import {
  dataExport,
  funcExport,
  members,
  letData,
} from "../../data/exportData.js";
export default function D_ExportData() {
  //   dataExport = "내가 바꿀꺼얌!";
  // letData = "내가 바꿀꺼임" 이거 readonly라서 바꿀수 없음
  let test = dataExport;
  test += "내가 바꿀꺼임"; // 이건 가능함 값을 변수에 저장해서 바꾸는건 가능함
  return (
    <div>
      <h3>모듈에서 제공하는 파일을 가져와 출력하기</h3>
      <ul>
        <li>dataExport : {dataExport}</li>
        <li>{funcExport()}</li>
      </ul>
      <h3>리스트 데이터 출력하기</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(members[0]).map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.userNo}>
                {Object.values(member).map((m, i) => (
                  <td key={`${m}_${i}`}>{m}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>{test}</h4>
    </div>
  );
}
