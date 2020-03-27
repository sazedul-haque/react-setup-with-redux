import { PRODUCT_LIST } from '../types';

const initialState = {
    product_list: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_LIST:
            return {
                ...state,
                product_list: action.payload
            }
        default:
            return state
    }
}