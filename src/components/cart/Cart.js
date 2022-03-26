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
            <button onClick={props.chooseOneBtn} className='m-2 w-100'>Chose One For me</button>
            <button onClick={props.chooseAgainBtn} className='m-2 w-100'>Chose Again</button>
        </div>
    );
};

export default Cart;