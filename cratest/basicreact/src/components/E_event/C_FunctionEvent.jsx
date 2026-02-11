import React, { useState } from "react";
import {
  eventHandler,
  useStateHandlerJs,
  debouncer,
  throttle,
} from "../../utils/handler";
const outerHandler = (e) => {
  console.log(e);
  console.log("외부에 선언된");
};
//state데이터에 접근이 불가능
// const useStateHandlerOuter = (e) => {
//   console.log(testData);
// };
export default function C_FunctionEvent() {
  const [testData, setTestData] = useState("나는 스테이트 데이타");

  const useStateHandler = (e) => {
    //내부에 선언된 핸들러에서 state값을 이용할 수 있다
    console.log(testData);
  };

  const innerHandler = (e) => {
    console.log(e);
    console.log("내부에 선언된 핸들러 ");
  };
  return (
    <div>
      <h2>선언된 함수를 핸들러로 이용하기</h2>
      <p>이벤트 속성에 함수를 함수명만 설정, 호출하면 안됨</p>
      <p>선언위치 </p>
      <ul>
        <li>
          컴포넌트 함수 내부 : 페이지가 렌더링 될 때 마다 함수가
          재선언된다.state,props데이터에 직접접근이 가능
        </li>
        <li>
          컴포넌트 외부 : 페이지가 렌더링되도 재선언하지 않음,state,props에 직접
          접근이 안되서 매개변수로 받아야만 한다
        </li>
      </ul>
      <h3>내부 함수 핸들러 등록하기</h3>
      <button onClick={innerHandler}>내부 함수 호출</button>
      <h3>외부에서 선언된 핸들러</h3>
      <button onClick={outerHandler}>외부함수 호출</button>
      <input type="text" onChange={eventHandler} />
      <h3>state값을 핸들러에서 이용하기</h3>
      <button onClick={useStateHandler}>state값 가져오기</button>
      <p>
        외부에 선언된 함수에서 state값 이용하기 핸들러에 매개변수로 전달
        고차함수 이용하기
      </p>
      <button onClick={useStateHandlerJs(testData)}>
        외부 함수에서 state 이용
      </button>
      <h3>Debouncer이용하기</h3>
      <p>
        지속적으로 발생하는 이벤트를 모두 실행하지 않고 특정시간이 지난 후
        마지막 이벤트만 실행하는 기술 click,keyup등등
      </p>
      <input
        type="text"
        onChange={debouncer((e) => {
          e.target.nextElementSibling.innerText = e.target.value;
        }, 300)}
      ></input>
      <span></span> <br />
      <button
        onClick={debouncer(() => {
          console.log("바나나");
        }, 600)}
      >
        클릭
      </button>

    <h3>Throttling 이용하기</h3>
    <p>
        특정시간을 기준으로 주기적으로 실행하는 것 ->무한 스크롤 처리할 때 많이 사용함
    </p>
     <div id="throttleTest" style={{height:"100px",overflow:"auto"}} 
     onScroll={throttle(()=>{
        console.log("스크롤 이벤트 실행")
     })}>

何度でも
<br />
난도데모
<br />
몇 번이든
<br />
何度でも叫ぶ
<br />
난도데모 사케부
<br />
몇 번이든 외쳐
<br />
この暗い夜の怪獣になっても
<br />
코노 쿠라이 요루노 카이쥬우니 낫테모
<br />
이 어두운 밤의 괴수가 된다 해도
<br />
ここに残しておきたいんだよ
<br />
코코니 노코시테 오키타인다요
<br />
여기에 남겨두고 싶어
<br />
この秘密を
<br />
코노 히미츠오
<br />
이 비밀을
<br />


だんだん食べる
<br />
단단 타베루
<br />
점점 먹어치워
<br />

赤と青の星々
<br />
아카토 아오노 호시보시
<br />
붉고 푸른 별들
<br />
未来から過去
<br />
미라이카라 카코
<br />
미래부터 과거
<br />
順々に食べる
<br />
쥰쥰니 타베루
<br />
차례차례 먹어치워
<br />
何十回も噛み潰し
<br />
난쥿카이모 카미츠부시
<br />
몇십 번이든 씹어 으깨고
<br />

溶けたなら飲もう
<br />
토케타나라 노모오
<br />
녹았다면 삼켜버리자
<br />
淡々と知る
<br />
탄탄토 시루
<br />
담담히 깨달아
<br />
知ればまた溢れ落ちる
<br />

시레바 마타 아후레오치루
<br />
깨달으면 또 흘러넘쳐
<br />
昨日までの本当
<br />
키노오마데노 혼토오
<br />
어제까지의 진실
<br />
順々と知る
<br />
쥰쥰토 시루
<br />
차례차례 깨달아
<br />
何十螺旋の知恵の輪
<br />
난쥬우라센노 치에노 와
<br />
수십 개의 나선형 지혜의 고리
<br />

解けるまで行こう
<br />
토케루마데 이코오
<br />
풀릴 때까지 나아가자
<br />


丘の上で星を見ると感じるこの寂しさも
<br />
오카노 우에데 호시오 미루토 칸지루 코노 사미시사모
<br />
언덕 위에서 별을 보면 느껴지는 이 외로움도
<br />
朝焼けで手が染まる頃にはもう忘れてるんだ
<br />
아사야케데 테가 소마루 코로니와 모오 와스레테룬다
<br />
아침노을에 손이 물들 때쯤에는 이미 잊어버린 후
<br />

この世界は好都合に未完成
<br />
코노 세카이와 코오츠고오니 미칸세이
<br />
이 세상은 딱 알맞게도 미완성
<br />
だから知りたいんだ
<br />
다카라 시리타인다
<br />
그러니 알고 싶어
<br />
でも怪獣みたいに遠く遠く叫んでも
<br />
데모 카이쥬우미타이니 토오쿠 토오쿠 사켄데모
<br />
하지만 괴수처럼 저 멀리 멀리 외쳐도
<br />
また消えてしまうんだ
<br />
마타 키에테 시마운다
<br />
다시 사라지고 말아
<br />


だからきっと
<br />
다카라 킷토
<br />
그러니까 꼭
<br />
何度でも見る
<br />
난도데모 미루
<br />
몇 번이든 바라봐
<br />
この暗い夜の空を
<br />
코노 쿠라이 요루노 소라오
<br />
이 어두운 밤의 하늘을
<br />
何千回も
<br />
난젠카이모
<br />
몇천 번이든
<br />
君に話しておきたいんだよ
<br />
키미니 하나시테 오키타인다요
<br />
너에게 얘기해두고 싶어
<br />

この知識を
<br />
코노 치시키오
<br />
이 지식을
<br />



淡々と散る
<br />
탄탄토 치루
<br />
담담히 꽃이 져
<br />

散ればまた次の実
<br />
치레바 마타 츠기노 미
<br />
진 후엔 다시 열리는 열매
<br />
花びらは過去
<br />
하나비라와 카코
<br />
꽃잎은 과거
<br />
単純に生きる
<br />
탄쥰니 이키루
<br />
단순하게 살아가
<br />

懐柔された土と木
<br />
카이쥬우사레타 츠치토 키
<br />
회유된 땅과 나무
<br />
ひそひそと咲こう
<br />
히소히소토 사코오
<br />
소곤소곤히 피워내자
<br />


点と線の延長線上を辿るこの淋しさも
<br />
텐토 센노 엔쵸오센죠오오 타도루 코노 사미시사모
<br />
점과 선의 연장선상을 뒤따르는 이 외로움도
<br />
暗がりで目が慣れる頃にはもう忘れてるんだ
<br />
쿠라가리데 메가 나레루 코로니와 모오 와스레테룬다
<br />
어두움에 눈이 익을 때쯤에는 이미 잊어버린 후
<br />

この世界は好都合に未完成
<br />
코노 세카이와 코오츠고오니 미칸세이
<br />
이 세상은 딱 알맞게도 미완성
<br />
僕は知りたいんだ
<br />
보쿠와 시리타인다
<br />
나는 알고 싶어
<br />
だから怪獣みたいに遠くへ遠くへ叫んで
<br />
다카라 카이쥬우미타이니 토오쿠에 토오쿠에 사켄데
<br />
그러니 괴수처럼 저 멀리 멀리 외치며
<br />

ただ消えていくんだ
<br />
타다 키에테이쿤다
<br />
그저 사라져 가
<br />
でも
<br />
데모
<br />
하지만
<br />
この未来は好都合に光ってる
<br />
코노 미라이와 코오츠고오니 히캇테루
<br />
이 미래는 딱 알맞게 빛나고 있어
<br />

だから進むんだ
<br />
다카라 스스문다
<br />
그러니 나아가는 거야
<br />
今何光年も遠く 遠く 遠く叫んで
<br />
이마 난코오넨모 토오쿠 토오쿠 토오쿠 사켄데
<br />
지금 몇 광년이든 저 멀리 멀리 멀리 외치며
<br />
また怪獣になるんだ
<br />
마타 카이쥬우니 나룬다
<br />
다시 괴수가 되는 거야

     </div>
    </div>
  );
}
