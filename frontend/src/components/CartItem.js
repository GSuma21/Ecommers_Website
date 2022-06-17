import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = ({item, quantityChangeHandler, removeHandler}) => {
  return (
    <div className='cartitem'>
        <img src={item.imageUrl} alt={item.name}/>
        <Link to={`/product/${item.product}`}> 
        <p className='cartitem_name'>{item.name}</p>
        </Link>

        <p className='cartitem_price'>{item.price}</p>

      
            <select className='cartitem_select'value={item.qty} onChange={(e) => quantityChangeHandler(item.product,e.target.value)}>
              {[...Array(item.countInStock).keys()].map((x) => (
                <option  key={x+1} value={x+1}>
                  {x+1}</option>
              ))}
            </select>
     

        <button className='cartitem_delete' onClick={() => removeHandler(item.product)}>
            <i className='fas fa-trash'></i>
        </button>

       
    </div>
  )
}

export default CartItem