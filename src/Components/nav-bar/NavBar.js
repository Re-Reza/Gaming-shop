import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {CartIcon, CartItemsList} from "../Cart";
import AppContext from "../../Context/appContext";
import { Search } from "./Search";

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/cart">cart</Link>    
                        </li>
                        <li>
                            <Link className="nav-link" to="/products/mouse">mouse</Link>    
                        </li>
                        <li>
                            <Link className="nav-link" to="/products/laptop">laptop</Link>    
                        </li>
                    </ul>
                
                    <div className="navbar-rightPart">
                        <CartIcon toggleShowState={toggleShowState} cartItems={appState.cartItems}/>
                        {
                            showState?
                            <CartItemsList cartItems={appState.cartItems} />:
                            <></>
                        }
                        <Search />
                    </div>

                </div>
            </div>
        
        </nav>
       
    )
}

export default NavBar;