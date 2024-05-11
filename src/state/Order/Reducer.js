import { CREAT_ORDER_FAILURE, CREAT_ORDER_REQUEST, CREAT_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from './ActionTypes';

const initialState = {
    orders: [],
    order: null,
    error: null,
    isLoading: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREAT_ORDER_REQUEST:
            return { ...state, isLoading: true, error: null }
        case GET_ORDER_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null }
        case CREAT_ORDER_SUCCESS:
            return { ...state, isLoading: false, success: true, order: action.payload, error: null }
        case GET_ORDER_BY_ID_SUCCESS:
            return { ...state, isLoading: false, order: action.payload, error: null }
        case CREAT_ORDER_FAILURE:
            return { ...state, isLoading: false, error: action.paylaod }
        case GET_ORDER_BY_ID_FAILURE:
            return { ...state, isLoading: false, error: action.paylaod }
        default:
            return state
    }
}