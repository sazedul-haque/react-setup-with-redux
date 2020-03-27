import { combineReducers } from 'redux';
import productReducer from './productRecuder';

const rootReducer = combineReducers({
    product: productReducer
});

export default rootReducer;