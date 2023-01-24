
export const initialState = {
    basket:[ ],
};

//selector
export const getBasketTotal= (basket)=>
basket?.reduce((total_amount,item)=> total_amount+item.price , 0);

const reducer=( state , action ) => {
   console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
           
            case 'REMOVE_FROM_BASKET' :
                return{
                    ...state,
                    basket:[ ],
                };
            default:
                return state ;
    }
};

export default reducer;
