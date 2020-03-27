import { PRODUCT_LIST } from '../types';
import axios from 'axios';

export const productList = (data) => {
    return {
        type: PRODUCT_LIST,
        payload: data
    }
}

export const getProductList = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch(productList(res.data));
            })
    }
}