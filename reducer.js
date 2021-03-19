export const initialState = {
    basket: [],
};

function reducer(state, action){
    switch(action.type){
        case "ADD_TO_CART":
            //add to cart
            break;
        case "REMOVE_FROM_CART":
            //remove from cart 
            break;
        default :
            return state;
            break;
    }

}

export default reducer;