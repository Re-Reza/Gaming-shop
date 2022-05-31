import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from "../../Context";
import MAIN_URL from "../MAINURL";

export function SignInIcon(){

    const {userState} = useContext(AppContext); 
    
    return(
        <Link to={MAIN_URL+"/signin"} >
            <div className="singIn">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <div>{userState.username==''|| userState.username==undefined ?"sign in": userState.username }</div>
            </div>
        </Link>
    )
}