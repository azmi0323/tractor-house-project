import React from 'react';
import Cart from '../../cart/Cart';
import Product from '../../product/Product';
import './Shop.css';

const Shop = () => {
    return (
        <div className='d-flex'>
            <div className='col-lg-8 col-md-8 col-sm-8 col-8 bg-info'>
                <Product></Product>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-4 bg-danger'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;