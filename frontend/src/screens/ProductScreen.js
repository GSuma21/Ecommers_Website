import React from 'react'
import './ProductScreen.css';
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom'

import { getProductDetails } from '../redux/actions/productActions';

import {addToCart} from '../redux/actions/cartActions'


const ProductScreen = () => {

  const [qty,setQty] = useState(1);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();
//  const {id} = params;
 

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading, error, product} = productDetails;
  
  useEffect(() =>{
    if(product &&  params.id !== product._id){
      dispatch(getProductDetails(params.id))
    }
  },[dispatch, product, params]);

   
  const addToCartHandler = () =>{
    dispatch(addToCart(params.id,qty));
    navigate("/cart");
  }

  return (
    <div className='productscreen'>
     {loading ?  (
          <h2>Loading....</h2>
          )  : error ? (
          <h2>{error}</h2> 
          ): (
            <>
           
            <div className='productscreen_left'>
        <div className='left_img'>
        <img src={product.imageUrl} alt={product.name} height={400}/>
        </div>
        <div className="left_info">
        <p className='left_name'>{product.name}</p>
        <p>{product.description}</p>
        <p className='left_price'>${product.price}</p>
        </div>

      </div>
      <div className='productscreen_right'>
        <div className='right_info'>
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Status: <span>{product.countInStock > 0 ? "In stock" :"Out of Stock" }</span>
          </p>

          <p>
            Qty
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option  key={x+1} value={x+1} >
                  {x+1}
                  </option>
                ))}
            </select>
          </p>

          <p>
            <button  onClick={addToCartHandler}>Add to Cart</button>
          </p>

        </div>

      </div>

            </>
          )}
          </div>
      
  ) 
}

export default ProductScreen

