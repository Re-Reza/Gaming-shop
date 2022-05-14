import React,{useEffect, useReducer, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/reset.css";
import NavBar from "./nav-bar/NavBar";
import { Home, ProductDetail, AdminPage, CartPage, SignIn, ProductCategoryPage } from "./pages";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import {AppContext} from "../Context";
import {cartReducer} from "./reducers";
import {Footer} from "./footer";

function App() {

  const [state, dispatch] = useReducer( cartReducer, {
    cartItems:[],
  });

  const [userState, setUserState] = useState({
    username:"",
  });


  useEffect(()=>{
    dispatch( {type:"getCartItems"} );
    const name = localStorage.getItem('username');
    setUserState({
      username:name,
    });

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={ {userState:userState, setUserState:setUserState,appState:state, dispatch} } >

          <NavBar hideRoute={"/signin"}/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/products/:category" element={<ProductCategoryPage/>} />
                <Route path="/product-detail/:category/:productId" element={<ProductDetail/>} />
                <Route path="/admin" element={<AdminPage/> } /> 
                <Route path="/cart" element={<CartPage/>} />
            </Routes>
          <Footer hideRoute={"/signin"}/>
          
        </AppContext.Provider>

      </BrowserRouter>
      

    </div>
  );
}

export default App;
