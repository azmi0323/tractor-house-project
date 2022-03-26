import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { chooseOneBtn, chooseAgainBtn } = props;
  return (
    <div className="mt-4 cart-components">
      <h4>Selected <span className="text-info">Products</span></h4>
      {props.cart.map((item) => (
        <div key={item.id}>
            <p className="fs-5 " >{item.name}</p>
            <hr />
        </div>
      ))}
      <button onClick={chooseOneBtn} className="m-2 w-100 btn btn-success">
        Chose One For me
      </button>
      <button onClick={chooseAgainBtn} className="m-2 w-100 btn btn-danger">
        Chose Again
      </button>
    </div>
  );
};

export default Cart;
