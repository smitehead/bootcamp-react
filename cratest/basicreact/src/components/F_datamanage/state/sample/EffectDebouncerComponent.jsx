import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import TableHeadComponent from "../../props/sample/TableHeadComponent";

export default function EffectDebouncerComponent() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      if (response.ok) {
        const data = await response.json();
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
        setProductList(myproduct);
        setLoading(false);
      }
    })();
  }, []);
  const productContent = (content) => {
    const reg = /.(png|jpg|jpeg|webp)$/i;
    if (Array.isArray(content)) {
      return content.map((c) => {
        if (reg.test(c.toString())) {
          return <img src={c.toString()} width="100" height="100" />;
        } else {
          return Object.values(c).map((t) => <p>{t}</p>);
        }
      });
    } else if (typeof content == "object") {
      return Object.values(content).map((c) => <span>{c}</span>);
    } else {
      //일반데이터 -> String
      if (reg.test(content)) {
        return <img src={content} width="100" height="100" />;
      } else return <span>{content}</span>;
    }
  };
  //query state값이 변경됐을때 실행되는 useEffect()
  useEffect(() => {
    // if(request) clearTimeout(request);
    if (query.length > 0) {
      const request = setTimeout(async () => {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/search/?q=${query}`,
        );
        if (response.ok) {
          const data = await response.json();
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
          setProductList(myproduct);
          setLoading(false);
        }
      }, 500);

      //클린업 함수를 설정해서 이전  timeout을 제거
      return () => {
        clearTimeout(request);
      };
    }
  }, [query]);
  const inputKeyword = async (e) => {
    setQuery(e.target.value);
    // const { value } = e.target;
    // const response = await fetch(
    //   `https://dummyjson.com/products/search/?q=${value}`,
    // );
    // if (response.ok) {
    //   const data = await response.json();
    //   console.log(data);
    // }
  };
  return (
    <div>
      <h3>상품리스트확인</h3>
      <input type="text" onChange={inputKeyword} />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {productList.length == 0 ? (
            <h3>조회된 상품이 없습니다</h3>
          ) : (
            <table>
              <TableHeadComponent header={Object.keys(productList[0])} />
              <tbody>
                {productList.map((product, i) => (
                  <tr key={product.id}>
                    {Object.values(product).map((p, i) => (
                      <td key={i}>{productContent(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}
