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

  const MAINURL= "/Gaming-shop";

  useEffect(()=>{
    dispatch( {type:"getCartItems"} );
    const name = localStorage.getItem('username');
    setUserState({
      username:name,
    });

  }, [])
  console.log("rununing")

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={ {userState:userState, setUserState:setUserState,appState:state, dispatch} } >

          <NavBar hideRoute={"/signin"}/>
            <Routes>
                <Route path={MAINURL} element={<Home/>} />
                <Route path={MAINURL+"/signin"} element={<SignIn/>} />
                <Route path={MAINURL+"/products/:category"} element={<ProductCategoryPage/>} />
                <Route path={MAINURL+"/product-detail/:category/:productId"} element={<ProductDetail/>} />
                <Route path={MAINURL+"/admin"} element={<AdminPage/> } /> 
                <Route path={MAINURL+"/cart"} element={<CartPage/>} />
            </Routes>
          <Footer hideRoute={"/signin"}/>
          
        </AppContext.Provider>

      </BrowserRouter>
      

    </div>
  );
}

export default App;