import React from 'react'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


import CartItem from '../components/CartItem'

import {addToCart, removeFromCart} from '../redux/actions/cartActions'

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;


  const quantityChangeHandler = (id,qty) =>{
    dispatch(addToCart(id,qty));
  }

  const removeHandler = (id) =>{
    dispatch(removeFromCart(id))
  }

  const getCartCount = () =>{
     return cartItems.reduce((qty,item) => Number(item.qty)+qty,0)
  }
  const getCartSubTotal = () =>{
    return cartItems.reduce((price,item) =>(item.price*item.qty)+price,0);
 }
  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ?(
          <div>
            your cart is empty 
          </div>
        ) :
          cartItems.map((item) =>( 
            <CartItem 
            key={item.product}
            item ={item} 
            quantityChangeHandler={quantityChangeHandler}
            removeHandler={removeHandler}
            />
           
           
          )

          
        )}

        <h3 ><Link to="/">Shop</Link></h3>
      </div>
      <div className='cartscreen_right'>
        <div className='cartscreen_info'>
          <p>SubTotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>

        </div>
        <div>
          <button>Proceed to checkOut</button>
          
      </div>

      </div>
        
    </div>
  )
}

// key={item.product}
// item={item} 
// quantityChangeHandler={quantityChangeHandler}  
// removeHandler={removeHandler}

export default CartScreen