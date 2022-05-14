import React, {createContext} from "react";

export const ProductDetailContext = createContext({
    category:'',
    productId:'',
    addCommentToState:()=>{},

});

// export default ProductDetailContext