import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import './Product.css';

const Product = () => {
    const [products, setProducts]=useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
    },[])
    return (
        <div>
            {
                products.map(product=><SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div>
    );
};

export default Product;