import { createContext } from "react";

export const AppContext =createContext({
    cartItems:[],
    dispatch:()=>{},
});

// export default AppContext;