export const ADD_TO_CART = '[PRODUCT] ADD_TO_CART';

export function addToCart(product){
    //return an action 
    return {
        type:ADD_TO_CART,
        payload:product,
    }
}