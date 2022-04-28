import React,{useEffect, useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/reset.css";
import NavBar from "./nav-bar/NavBar";
import { Home, ProductDetail, AdminPage, CartPage, GetHomeParams} from "./pages";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import AppContext from "../Context/appContext";
import {cartReducer} from "./reducers";

function App() {

  const [state, dispatch] = useReducer( cartReducer, {
    cartItems:[],
  });


  useEffect(()=>{
    dispatch( {type:"getCartItems"} )
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{appState:state, dispatch}} >

          <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products/:category" element={<GetHomeParams/>} />
                <Route path="/product-detail/:id" element={<ProductDetail/>} />
                <Route path="/admin" element={<AdminPage/> } /> 
                <Route path="/cart" element={<CartPage/>} />
            </Routes>

        </AppContext.Provider>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
