import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = ({click}) => {

  const cart =  useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount =() =>{
    return cartItems.reduce((qty,item) => qty+Number(item.qty),0)
  }
  return (
  
    <nav className='navbar'>
        {/* logo */}
        <div className='navbar_logo'>
            <h2>Mern Shopping Cart</h2>

        </div>
         {/* links */}
         <ul className='navbar_links'>
           <li>
                <Link to="/" className='cart__home'>
                  Home
                 

                </Link>
            </li>
            <li>
                <Link to="/cart" className="cart__link">
                  <i className='fas fa-shopping-cart'></i>
                  <span>
                  Cart
                  <span className='cartlogo_badge'> {getCartCount()} </span>
                  </span>
                </Link>
            </li>
            
            {/* {getCartCount()} */}

           

         </ul>
         
          {/* hamburger menu */}
          <div className='hamburger_menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>

          </div>

    </nav>
    
    
   
  )
}

export default Navbar;