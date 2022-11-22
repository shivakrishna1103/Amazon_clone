import React from 'react'
import { useStateValue } from './DataLayer/stateProvider'

function CheckoutProduct({id , image , title , price ,rating}) {
// const [{basket} , dispatch]= useStateValue(' ');
    // const removeFromBasket= ()=>{
    //     dispatch(
    //         [
                
    //             {
    //                 type:"Remove_From_Basket",
    //                 item:{
    //                     id:'id',
    //                     title:'title',
    //                 }

    //             }
    //         ]
    //     )
    // }
  return (
    <div className='checkoutProduct'>
        <h1>CheckoutProduct</h1>
        <img className='checkoutproduct_image' src={image}/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>{price}</p>
        </div>
        <div className='checkoutProduct_rting'>
            {Array(rating).fill().map((_,i)=>{
                <p>&#127775;</p>
            })}
        </div>
        <button type="button" onClick={console.log("removed from the basket")}>Remove From Basket</button>
     </div>
    
  )
}

export default CheckoutProduct