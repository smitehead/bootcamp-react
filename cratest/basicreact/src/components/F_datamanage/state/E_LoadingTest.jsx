import React, { useEffect, useState } from "react";
// 외부 데이터와 리스트 출력용/로딩용 컴포넌트들을 임포트합니다.
import { products } from "@/data/exportData";
import ProductList from "./sample/ProductList";
import LoadingComponent from "./sample/LoadingComponent";

export default function E_LoadingTest() {
  /* -----------------------------------------------------------
    1. 상태(State) 선언
  ----------------------------------------------------------- */
  // 서버에서 받아올 상품 데이터를 담을 공간 (초기값: 빈 배열)
  const [productList, setProductList] = useState([]);

  // 로딩 상태를 관리하는 스위치 (초기값: true -> 로딩 화면부터 시작)
  const [isLoading, setLoading] = useState(true);

  /* -----------------------------------------------------------
    2. 사이드 이펙트(Effect) 처리
  ----------------------------------------------------------- */
  // 컴포넌트가 마운트(화면 등장)되었을 때 딱 한 번만 실행
  useEffect(() => {
    // 3초(3000ms)의 대기 시간을 인위적으로 생성 (네트워크 지연 시뮬레이션)
    const timer = setTimeout(() => {
      // 3초 후 데이터 데이터를 state에 채움
      setProductList(products);

      // 데이터 로드가 끝났으므로 로딩 상태를 false로 변경 -> 화면 전환 유도
      setLoading(false);
    }, 3000);

    // [Cleanup] 컴포넌트가 언마운트될 때 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, []); // 의존성 배열이 빈 배열[]이므로 처음 한 번만 실행됨

  /* -----------------------------------------------------------
    3. UI 렌더링 (JSX)
  ----------------------------------------------------------- */
  return (
    <div>
      <h3>데이터를 가져와 출력할때 딜레이타임에 로딩페이지 출력하기</h3>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>
        E_LodingTest페이지가 로딩되면 3초후에 products데이터를 state값에 저장...
      </p>

      {/* [조건부 렌더링: 삼항 연산자]
        - isLoading이 true일 때 : 전용 로딩 컴포넌트를 보여줌 (props로 텍스트 전달)
        - isLoading이 false일 때 : 실제 데이터가 담긴 상품 리스트 컴포넌트를 보여줌
      */}
      {isLoading ? (
        <LoadingComponent text="로딩중" />
      ) : (
        <ProductList products={productList} />
      )}
    </div>
  );
}
