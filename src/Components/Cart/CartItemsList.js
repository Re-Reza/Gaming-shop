import React from 'react';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export function CartItemsList(props){

    const {cartItems} = props;

    return (
        <div className="cartItems-container">
        {
            cartItems.length == 0?
            <div className='emptyCart'>
                your cart is empty
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </div>
            :
            <div className='listItem-container'>
                
               <ul className="list-group list-group-flush">
                {
                    props.cartItems.map((item, index)=> <CartItem item={{...item, index}}  key={index} />)   
                }
                </ul>
                <Link to="/cart" className="cartLink btn btn-primary btn-sm">see your cart</Link>
            </div>
            
        }
        </div>
    )
}   