import React from "react";
import data from "../data/data";
import ShopCard from "./ShopCard";

const ShopProducts = () => {
  return (
    <section id="products" className="products">
      <h2>
        availabe <span>products</span>
      </h2>
      <p>sommer collection new modern designs</p>
      <div className="products-card">
        {data.shopProducts.map((item, index) => {
          return (
            <ShopCard
              title={item.title}
              img={item.img}
              store={item.store}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ShopProducts;
