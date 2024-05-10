import { 
    ADD_ITEM_TO_CART_FAILURE, 
    ADD_ITEM_TO_CART_REQUEST, 
    ADD_ITEM_TO_CART_SUCCESS, 
    GET_CART_FAILURE, 
    GET_CART_REQUEST, 
    GET_CART_SUCCESS, 
    REMOVE_CART_ITEM_FAILURE, 
    REMOVE_CART_ITEM_REQUEST, 
    REMOVE_CART_ITEM_SUCCESS, 
    UPDATE_CART_ITEM_FAILURE, 
    UPDATE_CART_ITEM_REQUEST, 
    UPDATE_CART_ITEM_SUCCESS
} from "./ActionTypes";

const initialState = {
    cart: null,
    isLoading: false,
    error: false,
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        
    }
}