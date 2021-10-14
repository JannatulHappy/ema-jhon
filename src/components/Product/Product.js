import React from "react";
import "./Product.css";
const Product = (props) => {
  const { stock, seller, name, img, price } = props.product;
  return (
    <div className="product">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>{seller}</p>
        <h3 className="product-price">price : {price}</h3>
        <p>Only {stock} left in Stock-- Order Soon</p>
      </div>
    </div>
  );
};

export default Product;
