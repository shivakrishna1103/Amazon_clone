import React from 'react';

function CheckoutProduct({id ,image, title , price ,rating}) {
 
  //  const removeFromBasket = ( )=>{
  //   dispatch({
  //     type: 'REMOVE_FROM_BASKET' ,
  //     id: id,
  //     title: title,
  //     image: image,
  //     price:price,
  //     rating:rating
  //   }
  //   )
  //  }

  return (
    <div className='checkoutProduct'>
        
    <img className='checkoutProduct_image' src={image} alt=""/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <samll>price:$</samll>
                <strong> {price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
            {Array(rating)
            .fill( )
            .map(( _ , i )=>{
              return(
                <p>&#127775;</p>
                )
            })}
            
        </div>
          <button type="button" >Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct ;