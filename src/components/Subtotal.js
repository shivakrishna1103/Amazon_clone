import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './DataLayer/reducer';
import { useStateValue } from './DataLayer/stateProvider';


function Subtotal( ) {
const [{basket},dispatch]= useStateValue( );

  return (
    <div className='subtotal'>

     <CurrencyFormat 
       renderText={( value )=> (
        <div>
           <p>
            Subtotal( {basket.length} items) : <strong>{value}</strong>
        </p>
        <small className='subtotal__gift'>
            <input type="checkbox" />This order contains a gift
        </small>
        </div>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator = {true}
      prefix={ ' $ ' }
      >
      </CurrencyFormat>
      <button type="button">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;