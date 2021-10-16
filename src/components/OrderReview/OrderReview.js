import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="product-container">
          {
              cart.map(product=><ReviewItem product={product}></ReviewItem>)
          }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
