import React, {useState} from "react";
import "../../css/product.css";
import axios from "axios";
import {LoadingSendMessage} from "../pages";

export function CreateComment(props){

    const [commentState, setComment]=useState({
        userName:"",
        commentText:"",
        commentDate:"",
        commentTime:"",
        errors:{
            userNameError: "",
            commentTextError: "",
        }
    });

    const [loading, setLoading] = useState(false);

    function changeHandler(objectKey ,event){

        setComment(previousState=>{
            return{
                ...previousState,
                [objectKey]:event.target.value,
                commentDate:new Date().toLocaleDateString(),
                commentTime: new Date().toLocaleTimeString(),
            }
        });
    }

    function sendComment(){
        if(isFormValid())
        {
            setLoading(true)
            // console.log(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${state.itemKey}/comments.json`);
            axios.post(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${props.itemKey}/comments.json`, commentState)
            .then(response=>{
                console.log(response);
                setLoading(false);
                props.addCommentToState(commentState)
                document.querySelector("textarea").placeholder="write your comment";   
                document.querySelector("textarea").classList.remove("red-placeholder");
                document.querySelector("textarea").value="";   
                document.getElementById("userNameInput").value=""
            }).catch(err =>console.log(err))
        }
        if(commentState.commentText == ""){
            document.querySelector("textarea").placeholder = "please write your comment!"
            document.querySelector("textarea").classList.add("red-placeholder")
        }
        if(commentState.userName == ""){
            console.log("yes")
            document.getElementById("userNameInput").placeholder="Please fill this input";
            document.getElementById("userNameInput").classList.add("red-placeholder");
        }
    }

    function isFormValid(){
        const errors={};
        if( !commentState.userName ){
            errors.userNameError = "Please Enter your username!";
        }
        if( !commentState.commentText ){
            errors.commentTextError = "Please Write your comment text!";
        }
        //با این کار زمانی که یک اینپوت بعد از دیدن ارور پر شود دیگر ارور ان نمای داده نمیشود چون ابجکت اررور فاقد ان ویژگی است و ست استیت میشود
        setComment({...commentState,errors});

        return errors.userNameError || errors.commentTextError ? false : true;
    }

    return(
        <div className="textArea">
            <div className="inputGroup">
                <small className="text-danger">{commentState.errors.userNameError}</small>
                <input id="userNameInput" onChange={changeHandler.bind(this, "userName")} type="text" className="form-control" placeholder="Enter your name"/>
                <small className="text-danger">{commentState.errors.commentTextError}</small>
                <textarea onChange={changeHandler.bind(this, "commentText")} className="form-control" placeholder="type your comment"></textarea>
            </div>
            <button onClick={sendComment} className="btn btn-success">send</button>
            {
                loading? <LoadingSendMessage/>
                :<></>
            }
        </div>
    )
}