import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = (props) => {
  const { name, img, price, quantity } = props.product;

  return (
    
    <div className="col ">
      <div className="product-container h-100 p-4">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div className="mt-3">
        <h5>{name}</h5>
        <h6>price : {price}</h6>
        <p>Quantity : {quantity}</p>
        
      </div>
      <button className="w-100 mt-auto btn btn-info" onClick={()=>props.addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
      </div>
      
    </div>
  );
};

export default SingleProduct;
