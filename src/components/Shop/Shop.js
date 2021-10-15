import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts,setDisplayProducts]=useState([])
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) =>{
        setProducts(data)
        setDisplayProducts(data)
      });
  }, []);
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (products.length) {
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  const handleSearch=(e)=>{
    const searchText = (e.target.value)
   const matchedProducts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
   setDisplayProducts(matchedProducts)

  }
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // save to local storage for now
    addToDb(product.key);
  };
  return (
    <>
      <div className="search-container">
        <input onChange={handleSearch} type="text" placeholder="search product"/>
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
