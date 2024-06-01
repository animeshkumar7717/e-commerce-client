import { api } from "../../config/apiConfig";
import { CREAT_PAYMENT_FAILURE, CREAT_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionTypes";

export const createPayment = (orderId) => async(dispatch) => {
    dispatch({type: CREAT_PAYMENT_REQUEST});
    try {
        const { data } = await api.post(`api/payment/${orderId}`, {});
        if(data.payment_link_url) {
            window.location.href = data.payment_link_url
        }
    } catch (error) {
        dispatch({type: CREAT_PAYMENT_FAILURE, payload: error.message});
        
    }
}

export const updatePaymentInformation = (reqData) => async(dispatch) => {
    dispatch({type: UPDATE_PAYMENT_REQUEST});
    try {
        const { data } = await api.get(`api/payment?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
    } catch (error) {
        dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
        
    }
}