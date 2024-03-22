import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import Star from "../star/Star";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = (props) => {
  // console.log(props)
  const { addItem } = useCart();
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="card-info">
        <span>{props.store}</span>
        <h4>{props.title}</h4>
        <Star />
        <span className="price">{props.price}$</span>
      </div>
      <NavLink to="/cart" className="cart" onClick={() => addItem(props.item)}>
        <FaShoppingBag />
      </NavLink>
    </div>
  );
};

export default ProductCard;
