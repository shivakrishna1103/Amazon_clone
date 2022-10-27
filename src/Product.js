import React from 'react'

export const Product = ({id,image,title,rating,price}) => {
  return (
    <div className='product '>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>Price : $</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map(( _ , i )=>(
                <p key={i}>&#11088;</p>
              ))}
            </div>
        </div>
        <img src={image} alt=" "></img>
        <button>Add To Cart</button>
    </div>
  )
}
