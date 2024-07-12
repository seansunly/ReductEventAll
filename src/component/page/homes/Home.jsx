import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getallProducts,
  fetchProduct,
} from "../../../reducs/feature/product/productSlice";
import ProductCard from "../../card/ProductCard";

export default function Home() {
  //use for action to back
  const deispacht = useDispatch();
  useEffect(() => {
    deispacht(fetchProduct());
  }, []);
  const products = useSelector(getallProducts);
  // console.log(" product test 1", products);
  return (
    <>
      <div>this is Home page</div>
      <section className=" max-w-screen-xl mx-auto grid grid-cols-1">
        {products.map((product, index) => {
          return (
            <section className="flex justify-center">
              <div>
                <ProductCard
                  key={index}
                  // image={product.image}
                  // quantity={product.quantity}
                  // price={product.price}
                  // desc={product.desc}
                  // name={product.name}
                  // id={product.id}
                  // qty={0}
                  slug={product.slug}
                  title={product.title}
                  img={product.thumbnail}
                  about={product.about}
                  date={product.date}
                  description={product.description}
                  
                />
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}
