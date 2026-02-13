import React from "react";
import TableHeadComponent from "../../props/sample/TableHeadComponent";
import ButtonComponent from "../../props/sample/ButtonComponent";

export default function ProductList({ products, setProducts }) {
  return (
    <div>
      {products.length > 0 ? (
        <table>
          <TableHeadComponent
            header={["상품번호", "상품명", "가격", "종류", "색상", "삭제"]}
          />
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.productNo}>
                  {Object.values(product).map((v, i) => (
                    <td key={`${i}_${v}`}>{v}</td>
                  ))}
                  <td
                    onClick={((productNo) => (e) => {
                      setProducts((prev) => {
                        return prev.filter((p) => p.productNo != productNo);
                      });
                    })(product.productNo)}
                  >
                    <ButtonComponent variant="warn" size="small">
                      삭제
                    </ButtonComponent>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>조회된 상품이 없습니다</h3>
      )}
    </div>
  );
}
