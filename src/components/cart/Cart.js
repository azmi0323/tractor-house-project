import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { chooseOneBtn, chooseAgainBtn } = props;
  return (
    <div className="mt-4">
      <h1>This is card</h1>
      {props.cart.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button onClick={chooseOneBtn} className="m-2 w-100">
        Chose One For me
      </button>
      <button onClick={chooseAgainBtn} className="m-2 w-100">
        Chose Again
      </button>
    </div>
  );
};

export default Cart;
