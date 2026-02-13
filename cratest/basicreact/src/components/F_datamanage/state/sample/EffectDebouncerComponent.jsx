import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import TableHeadComponent from "../../props/sample/TableHeadComponent";

export default function EffectDebouncerComponent() {
  const [productList, setProductList] = useState([]); // API로 받은 상품 배열 저장
  const [isLoading, setLoading] = useState(true); // 로딩 상태 관리

  /* -----------------------------------------------------------
    1. useEffect & 비동기 데이터 통신 (Fetch)
  ----------------------------------------------------------- */
  useEffect(() => {
    // IIFE(즉시 실행 함수)를 사용하여 useEffect 내에서 async/await 사용
    (async () => {
      // 외부 공개 API를 통해 상품 데이터를 요청
      const response = await fetch(`https://dummyjson.com/products`);

      if (response.ok) {
        const data = await response.json();

        // reduce를 사용하여 API 결과 중 필요한 필드만 추출하여 새로운 배열 생성
        const myproduct = data.products.reduce((arr, product) => {
          const {
            id,
            title,
            category,
            price,
            rating,
            stock,
            brand,
            weight,
            images,
            thumbnail,
          } = product;

          // 가공된 객체를 누적 배열(arr)에 추가
          arr.push({
            id,
            title,
            category,
            price,
            rating,
            stock,
            brand,
            weight,
            images,
            thumbnail,
          });
          return arr;
        }, []);

        setProductList(myproduct); // 상태 업데이트
        setLoading(false); // 로딩 종료
      }
    })();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트 탄생 시 1회 실행

  /* -----------------------------------------------------------
    2. 데이터 타입별 렌더링 함수 (productContent)
    이 함수는 데이터가 문자열인지, 이미지 경로인지, 배열인지 판단하여 알맞은 태그를 반환합니다.
  ----------------------------------------------------------- */
  const productContent = (content) => {
    // 정규표현식: 확장자가 png, jpg, jpeg, webp로 끝나는지 확인
    const reg = /.(png|jpg|jpeg|webp)$/i;

    // A. 데이터가 배열(Array)인 경우 (예: images 배열)
    if (Array.isArray(content)) {
      return content.map((c, idx) => {
        if (reg.test(c.toString())) {
          // 이미지 주소면 <img> 태그로 출력
          return (
            <img
              key={idx}
              src={c.toString()}
              width="100"
              height="100"
              alt="product"
            />
          );
        } else {
          // 일반 객체나 텍스트면 <p> 태그로 출력
          return typeof c === "object" ? (
            Object.values(c).map((v, i) => <p key={i}>{v}</p>)
          ) : (
            <p key={idx}>{c}</p>
          );
        }
      });
    }
    // B. 데이터가 객체(Object)인 경우
    else if (typeof content === "object" && content !== null) {
      return Object.values(content).map((c, i) => <span key={i}>{c}</span>);
    }
    // C. 일반 데이터(String, Number 등)인 경우
    else {
      // 문자열이 이미지 주소 형태라면 <img> 출력, 아니면 일반 글자 <span> 출력
      if (reg.test(content)) {
        return <img src={content} width="100" height="100" alt="thumb" />;
      } else {
        return <span>{content}</span>;
      }
    }
  };

  /* -----------------------------------------------------------
    3. 메인 렌더링 영역
  ----------------------------------------------------------- */
  return (
    <div>
      <h3>상품리스트확인</h3>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <table className="min-w-full border">
          {/* 첫 번째 상품 객체의 키(Key)들로 테이블 헤더 자동 생성 */}
          <TableHeadComponent header={Object.keys(productList[0])} />
          <tbody>
            {productList.map((product) => (
              <tr key={product.id} className="border-b">
                {/* 객체의 각 밸류(Value)를 순회하며 td 생성 */}
                {Object.values(product).map((p, i) => (
                  <td key={i} className="p-2 border-r">
                    {/* 데이터 성격에 따라 productContent 함수가 렌더링 결정 */}
                    {productContent(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
