
export const initialState = {
    basket:[ ],
};

//selector
export const getBasketTotal= (basket)=>
basket?.reduce((total_amount,item)=>item.price+total_amount , 0);

const reducer=( state , action ) => {
   
    switch(action.payload) {
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };
           
            case "REMOVE_FROM_BASKET" :
              
               const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
               );
               let newBasket = [...state.basket];
               if(index >= 0)
               {
                  newBasket.splice(index, 1)

               }else {
                console.warn(`cant remove product(id:${action.id}) as its not in the basket!`)
               } 
                return {
                    ...state,
                    basket: newBasket
                }
            default:
                return state ;
            }
        }  

export default reducer;
