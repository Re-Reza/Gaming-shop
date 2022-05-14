import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import "../../css/signInPage.css";
import { useNavigate } from "react-router";
import {AppContext} from "../../Context";

export function SignIn(){

    const [state, setState] = useState({
        enterAdmin:false,
        inputValue:"",
    });

    const navigate = useNavigate();
    const {userState, setUserState} = useContext(AppContext);
    
    useEffect(()=>{
        document.title = 'Sign in';
    }, [])

    function toggleSignInMode(){
        setState({
            enterAdmin:!state.enterAdmin,
        });
    }

    const inputChangeHandler = (event) =>{
        setState({
            ...state,
            inputValue:event.target.value,
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(state.enterAdmin)
        {
            axios.get("https://gaming-shop-1496f-default-rtdb.firebaseio.com/adminInfo.json")
            .then(response=>{
                console.log(Object.entries(response.data));
                const {password, name} = Object.entries(response.data)[0][1];
                console.log(Object.entries(response.data)[0][1]);
                console.log(password);
                if(password == state.inputValue)
                {
                    confirmUsername(name,"/admin")
                } 
                else
                    alert("password is incorrect");
            })
            .catch(error=>console.log(error));
        }
        else{
            confirmUsername(state.inputValue, "/");
        }
    }

    function confirmUsername(name, path){
        setUserState({
            username: name,
        });
        localStorage.setItem('username', name);
        navigate(path);
    }

    return (
        <div className="signin-container">
            <form className="signForm" onSubmit={submitHandler}>
                <h1>{state.enterAdmin?"Singin as Admin":"Singin as User"}</h1>
               <div className="signForm-inputContainer">
                    <label  htmlFor="sigInInput">{state.enterAdmin?"Enter password":"Enter your username"}</label>
                    <input  onChange={inputChangeHandler} className=" form-control" type={state.enterAdmin?"password":"text"} id="sigInInput"/>
                    <button  type="submit" className="btn btn-primary">Sign in</button>
                    <p onClick={toggleSignInMode} className="text-muted signInMode">{state.enterAdmin?"Sing in as user":"Sing in as admin"}</p>
               </div>
            </form>
        </div>
    )
}