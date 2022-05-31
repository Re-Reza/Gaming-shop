import React, {useContext, useState} from 'react';
import {CartIcon, CartItemsList} from "../Cart";
import {AppContext} from "../../Context";
import { Search, NavLinks, SignInIcon } from "./";
import "../../css/navbar.css";
import { Routes, Route, useLocation } from 'react-router';

//در جایی که این کامپوننت فراخوانی شده در بین دو تگ کامپوننت BrowserRouter است در غیر این صورت کامپوننت لینک کار نمیکند
function NavBar(props)
{
    const {appState, dispatch} = useContext(AppContext);
    const [showState, setShowState] = useState(false)
    const { pathname } = useLocation()
    console.log(useLocation());
    console.log(props.hideRoute);
    function toggleShowState(){
        console.log("toggleShowState")
        setShowState(previousState=>!previousState)
    }

    if(pathname == props.hideRoute)
    {
        console.log("yes");
        return <></>
    }

    return(
        <>
            <nav className="navigation">
                <Routes>
                    <Route path="/Gaming-shop" element={        
                    <div className="nav-top">
                        <div className="nav-top-headPart">
                            <h1 className="nav-title">Gaming shop</h1>
                            <div className="nav-top-headPart-singIn"><SignInIcon/></div>
                        </div>
                        <div className="nav-top-search-cart-container">
                            <div className="nav-top-search">
                                <Search/>
                            </div>
                            <div>
                                <CartIcon toggleShowState={toggleShowState} cartItems={appState.cartItems}/>
                                {
                                    showState?
                                    <CartItemsList cartItems={appState.cartItems} />:
                                    <></>
                                }
                            </div>
                        </div>
                        <div className="nav-top-signIn">
                            <SignInIcon/>
                        </div>
                    </div> 
                } />
                </Routes>
            </nav>     
            
            <div className="nav-bottom">
                <NavLinks/>
            </div> 
        </>   
    )
}
export default NavBar;



