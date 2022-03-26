import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import './Product.css';

const Product = (props) => {
    const [products, setProducts]=useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
    },[])
    return (
        <div className='row gx-4 gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                products.map(product=><SingleProduct addToCart={props.addToCart} product={product} key={product.id}></SingleProduct>)
            }
        </div>
    );
};

export default Product;