import React, { useState } from "react";
import { NumberGenerator } from "@/data/exportData";
const productNoGenerator = NumberGenerator("PROD");
//권한을 받아서
export default function ProductInput({ setProducts }) {
  //일단 객체를 만들어서
  const [product, setProduct] = useState({
    productNo: "",
    productName: "",
    price: 0,
    type: "",
    color: "",
  });

  const type = ["식품", "전자기기", "악세사리", "주방용품", "기타"];
  const colors = [
    { key: "빨강", value: "red" },
    { key: "파랑", value: "blue" },
    { key: "주황", value: "orange" },
    { key: "초록", value: "green" },
  ];
  const containerStyle = "flex flex-col w-50 space-y-2";
  //product객체를 업데이트
  const makeProduct = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    //입력받은걸로 채운 객체를 D_stateSendUse에서 받은 setProducts에 저장 후 반환
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  //그객체를 Products배열에 넣기
  const addProduct = (e) => {
    const saveProduct = {
      ...product,
      //숫자 붙이기
      productNo: productNoGenerator.next().value,
    };
    //products 배열에 넣기
    setProducts((products) => {
      return [...products, saveProduct];
    });
    // 작성후 적은것들 초기화 용도
    setProduct({
      productNo: "",
      productName: "",
      price: 0,
      type: "",
      color: "",
    });
  };

  return (
    <div className="flex flex-col items-center bg-blue-50 p-5 space-y-5">
      <h3>상품입력</h3>
      <div className={containerStyle}>
        <input
          type="text"
          name="productName"
          placeholder="상품이름"
          onChange={makeProduct}
          value={product.productName}
        />
        <input
          type="number"
          name="price"
          placeholder="가격"
          min="1000"
          step="1000"
          onChange={makeProduct}
          value={product.price}
        />
        <select name="type" onChange={makeProduct} defaultValue="">
          <option disabled value="">
            선택
          </option>
          {type.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-2">
          {colors.map((color) => {
            return (
              <label>
                <input
                  name="color"
                  type="radio"
                  value={color.value}
                  onChange={makeProduct}
                  checked={product.color == color.value}
                />
                <span className={`bg-${color.value}-900`}>{color.key}</span>
              </label>
            );
          })}
        </div>
        <button onClick={addProduct}>저장</button>
      </div>
    </div>
  );
}
