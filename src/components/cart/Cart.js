import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className=''>
            <h1>This is card</h1>
            {
                props.cart.map(item=>(
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    );
};

export default Cart;