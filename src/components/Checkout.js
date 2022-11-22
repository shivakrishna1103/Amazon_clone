import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './DataLayer/stateProvider'
import Subtotal from './Subtotal'
function Checkout({props}) {
   
    const [ { basket } ,  diapatch ] = useStateValue( ' ' );


  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className="checkout__ads" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt=" "></img>
        </div>
        <div >
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {basket.map((item,index)=>{
                <CheckoutProduct key={index}>
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                </CheckoutProduct>
            })}
          
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout