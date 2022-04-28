import { createContext } from "react";

const AppContext =createContext({
    cartItems:[],
    dispatch:()=>{},
});

export default AppContext;