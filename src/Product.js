import React from 'react'

export const Product = () => {
  return (
    <div className='product '>
        <div className='product_info'>
            <p>The learn Startup</p>
            <p className='product-price'>
                <small>$</small>
                <strong>19.23</strong>
            </p>
            <div className='product_rating'>
               <p>&#11088;</p>
               <p>&#11088;</p>
               <p>&#11088;</p>
            </div>
        </div>
    </div>
  )
}
