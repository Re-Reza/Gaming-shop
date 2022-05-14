import React, {useState, useContext} from "react";
import "../../css/product.css";
import axios from "axios";
import {LoadingSendMessage} from "../pages";
import {AppContext, ProductDetailContext} from "../../Context";

export function CreateComment(props){

    const {userState} = useContext(AppContext);
    const {category, productId, addCommentToState} = useContext(ProductDetailContext);
    console.log(useContext(ProductDetailContext));

    const [commentState, setComment]=useState({
        userName:userState.username,
        commentText:"",
        commentDate:"",
        commentTime:"",
        errors:{
            commentTextError: "",
            postFiled : "",
        }, 
        loading:false
    });

    function changeHandler(objectKey, event){

        setComment(previousState=>{
            return{
                ...previousState,
                [objectKey]:event.target.value,
                commentDate:new Date().toLocaleDateString(),
                commentTime:new Date().toLocaleTimeString(),
            }
        });
    }

    function sendComment(){

        const { errors, ...data } = commentState;
        console.log(data);

        if(isFormValid())   //if(isFormValid())
        {
            setComment({
                ...commentState,
                loading : true, 
            })
            axios.post(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${category}/${productId}/comments.json`, data)
            .then(response=>{
                console.log(response);
                addCommentToState(data);
                setComment({
                    ...commentState,
                    commentText : "",
                    errors:{
                        commentTextError: "",
                        postFiled : ""
                    },
                    loading :  false,
                });
                document.querySelector("textarea").value = "";
            }).catch(err =>{
                console.log(err);
                setComment(previousState=>{
                    return {
                        ...previousState,
                        errors : {
                            ...previousState.errors,
                            postFiled : "failed to post your comment please try again!",
                        }
                    }
                });
            });
        }
    }

    function isFormValid(){
        console.log(commentState.commentText);
        if( commentState.commentText==""  )
        {
            setComment(previousState=>{
                return {
                    ...previousState,
                    errors : {
                        ...previousState.errors,
                        commentTextError : "Please type your comment!",
                    }
                }
            });

            return false;
        }
        return true;
    }

    return(
        <div className="createComment-container">
            <div className="inputGroup">
                <small className="text-danger mb-2">{commentState.errors.commentTextError}</small>
                {/* <small className="text-danger mb-2">{commentState.errors.postFiled}</small> */}
                <textarea onChange={changeHandler.bind(this, "commentText")} className="form-control" placeholder="type your comment"></textarea>
            </div>
            <button onClick={sendComment} className="btn btn-success">send</button>
            {
                commentState.loading? <LoadingSendMessage/>
                :<></>
            }
        </div>
    )
}