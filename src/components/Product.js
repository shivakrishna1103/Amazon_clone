import React from 'react'
import {useStateValue} from './StateProvider' 
const Product = ( {id,title,image,price,rating}) => {
const [state , dispatch] =useStateValue( );
console.log("this is the basket >>>")
  const addToBasket =( ) => {
   dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating
    },
   })
  }


  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small> price : $</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map( ( _ , i )=>(
            <p key={i}>&#127775;</p>
          ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add Cart</button>
    </div>
  )
}

export default Product
