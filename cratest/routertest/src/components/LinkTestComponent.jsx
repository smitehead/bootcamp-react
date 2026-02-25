import React from 'react'
import { Link,createSearchParams } from 'react-router-dom'
import HeaderComponent from './common/HeaderComponent'

export default function LinkTestComponent() {
  return (
    <div>
        <HeaderComponent/>
        <h2>Link컴포넌트에 대해 알아보자</h2>
        <p>
            컴포넌트로 링크를 설정할때 사용하는 컴포넌트 -> a태그로 전환<br></br>
            속성
            to : 이동할 route주소를설정 -> String,객체설정가능
        </p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Link to="/about?test=111#1111">기본연결-문자열</Link>
            <Link to={{pathname:"/about",search:`?${createSearchParams({name:"test",key:"1@s3Ed#"})}`,hash:"#5555555"}}>객체로 연결하기</Link>
            <h4>Link태그로 state값 전송하기</h4>
            <p>외부에 노출되지 않는 고정값을 전달할때 사용</p>
            <Link to="/about" state={{id:"admin",role:"M1"}}>state값 전달하기</Link>
            <Link to='/about' replace={true}>
                replace속성이용하기 - -1로 이동 불가능
            </Link>
        </div>

    </div>
  )
}
