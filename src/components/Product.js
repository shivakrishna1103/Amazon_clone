import React from 'react'
import { useStateValue } from './DataLayer/stateProvider' ;


const Product = ( {id,title,image,price,rating}) => {

const [ {basket} ,dispatch ] = useStateValue( );

const addToBasket = ()=>{
  // console.log("this is from basket",basket)
  dispatch({
    type: 'ADD_TO_BASKET',
    item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating,
  },
  });
};
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small> price : $</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
          .fill()
          .map( ( _ , i )=>(
            <p key={i} >🌟</p>
          ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={()=>{
  addToBasket()}}>Add To Cart</button>
    </div>
  )
}
export default Product;

