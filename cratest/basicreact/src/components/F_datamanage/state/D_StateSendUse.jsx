import React, { useState } from "react";
import ProductInput from "./sample/ProductInput";
import ProdcutList from "./sample/ProductList";

//부모에서 설정한 state값을 자식에게 전달하기
export default function D_StateSendUse() {
  const [products, setProducts] = useState([]); //생성

  return (
    <div>
      <h3>자식에게 state데이터 전달해서 활용하기</h3>
      {/*보기게 하기 위해 주기*/}
      <ProdcutList products={products} setProducts={setProducts} />
      {/*바꾸는 권한주기*/}
      <ProductInput setProducts={setProducts} />
    </div>
  );
}
