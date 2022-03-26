import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { name, img, price, quantity } = props.product;

  return (
    <div className="col product-container">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div className="mt-3 ">
        <h5>{name}</h5>
        <h6>price : {price}</h6>
        <p>Quantity : {quantity}</p>
        <button className="w-100 btn btn-danger position-" onClick={()=>props.addToCart(props.product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
