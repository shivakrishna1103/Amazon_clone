import React from 'react';
function CheckoutProduct({id , image , title , price ,rating}) {
  return (
    <div className='checkoutProduct'>
        <h1>product Details</h1>
        {/* <img className='checkoutProduct_image' src={image}/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <samll>$</samll>
                <strong> {price}</strong>
               
                </p>
        </div>
        <div className='checkoutProduct_rting'>
            {Array(rating)
            .fill()
            .map(( _ , i )=>{
                <p>&#127775;</p>
            })}
        </div>
        <button type="button" onClick={console.log("removed from the basket")}>Remove From Basket</button> */}
     </div>
    
  )
}

export default CheckoutProduct