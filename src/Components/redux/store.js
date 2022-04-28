import { createStore } from 'redux';
import {cartReducer} from "../product/cartReducer/reducer";

export const cartStore = createStore(cartReducer);