import React from "react";

const ReviewItem = (props) => {
  const {img, name, quantity, price,key } = props.product;
  const {handleRemove}=props
  return (
    <div className="product">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <h3 className="product-price">price : {price}</h3>
        <p>Quantity : {quantity}</p>
        <button onClick={()=>handleRemove(key)} className="btn-regular">Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
