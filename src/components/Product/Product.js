import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from "react-rating";
const Product = (props) => {
  const { stock,star, seller, name, img, price } = props.product;
  

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
       
        <button onClick={()=>props.handleAddToCart(props.product)} className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
