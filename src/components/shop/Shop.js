import React, { useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";

import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.length < 4) {
      const isExist = cart.find((cartItem) => cartItem.id === item.id);
      if (!isExist) {
        setCart([...cart, item]);
      } else {
        alert("Already Exist this Item");
      }
    } else {
      alert("You can only select four items");
    }
  };

  const chooseOneBtn = () => {
    if (cart.length > 0) {
      const random = Math.floor(Math.random() * cart.length);
      setCart([cart[random]]);
    }
  };
  const chooseAgainBtn = () => {
    setCart([]);
  };

  return (
    <div className="row ">
      <div className="col-lg-10 col-md-8 col-sm-12 col-12">
        <Product addToCart={addToCart}></Product>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-12 col-12">
        <Cart
          chooseOneBtn={chooseOneBtn}
          chooseAgainBtn={chooseAgainBtn}
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
