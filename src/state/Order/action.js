import { api } from "../../config/apiConfig";
import { CREAT_ORDER_FAILURE, CREAT_ORDER_REQUEST, CREAT_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionTypes";

export const createOrder = (reqData) => async(dispatch) => {
    dispatch({type: CREAT_ORDER_REQUEST});
    try {
        const { data } = await api.post(`api/orders`, reqData.address);
        if(data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}`})
        }
        dispatch({type: CREAT_ORDER_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: CREAT_ORDER_FAILURE, payload: error.message});
        
    }
}

export const getOrderById = (orderId) => async(dispatch) => {
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try {
        const { data } = await api.post(`api/orders/${orderId}`);
        dispatch({type: GET_ORDER_BY_ID_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: GET_ORDER_BY_ID_FAILURE, payload: error.message});
        
    }
}