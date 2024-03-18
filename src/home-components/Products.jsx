import React from "react";
import ProductCard from "./ProductCard";
import data from "../data/data";

const Products = () => {

  // console.warn(HomeData.productsItems)

  return (


    <section id="products" className="products">
      <h2>
        featured <span>products</span>
      </h2>
      <p>styled collection new modern designs</p>
      <div className="products-card">
        {data.homeProducts.map((item,index) => {
            return (
                <ProductCard title={item.title} img={item.img} store={item.store} price={item.price} item={item} key={index}  />
            )
        })}
      </div>
    </section>
  );
};

export default Products;
