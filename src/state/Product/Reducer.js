import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionTypes"

const initialState = {
    products: [],
    product: null,
    isloading: false,
    error: null
}

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null }
        case FIND_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, error: null, product: action.payload }


        case FIND_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        


        default:
            return state;
    }
}