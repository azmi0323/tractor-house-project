import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = () => {
    const [products, setProducts]=useState([]);
    console.log(products);
    useEffect(()=>{
        fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
    },[])
    return (
        <div>
            <h1>product</h1>
        </div>
    );
};

export default Product;