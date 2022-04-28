import React, {useContext, useState} from 'react';
import {CartIcon, CartItemsList} from "../Cart";
import AppContext from "../../Context/appContext";
import { Search, NavLinks, SignIn } from "./";
import "../../css/navbar.css";

//در جایی که این کامپوننت فراخوانی شده در بین دو تگ کامپوننت BrowserRouter است در غیر این صورت کامپوننت لینک کار نمیکند
function NavBar()
{
    const {appState, dispatch} = useContext(AppContext);
    const [showState, setShowState] = useState(false)

    function toggleShowState(){
        console.log("toggleShowState")
        setShowState(previousState=>!previousState)
    }

    return(
        <>
            <nav className="navigation">
                <div className="nav-top">
                    <div className="nav-top-headPart">
                        <h1 className="nav-title">Gaming shop</h1>
                        <div className="nav-top-headPart-singIn"><SignIn/></div>
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
                        <SignIn/>
                    </div>
                </div>

            </nav>     
            
            <div className="nav-bottom">
                <NavLinks/>
            </div> 
        </>   
    )
}


{/* <li>
<Link to="/">Laptop</Link>
</li>
<li>
<Link to="/">Gaming Chair</Link>
</li>
<li>
<Link to="/">Mouse</Link>
</li>
<li>
<Link to="/">Keyboard</Link>
</li>
<li>
<Link to="/">Home</Link>
</li> */}
export default NavBar;



