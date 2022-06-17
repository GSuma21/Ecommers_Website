import React from 'react'
import { Link } from 'react-router-dom'
import './SideDraw.css'
import { useSelector } from 'react-redux'

const SideDraw = ({show, click}) => {
  const cart =  useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount =() =>{
    return cartItems.reduce((qty,item) => qty+Number(item.qty),0)
  }
  const sideClass = ["sidedraw"]
  if(show){
    sideClass.push("show")
  }
  return  <div className={sideClass.join(" ")}>
    <ul className='sideDraw__cartlinks' onClick={click}>
    <li>
                <Link to="/" className='sidedraw__home'>
                  Home
                 

                </Link>
            </li>
            <li>
                <Link to="/cart" className="sidedraw__cartlink">
                  <i className='fas fa-shopping-cart'></i>
                  <span>
                  Cart
                  <span className='sidedraw_cartbadge'>{getCartCount()}</span>
                  </span>
                </Link>

                {/* {getCartCount()} */}
            </li>
    </ul>
  </div>
  
}

export default SideDraw