import React, {useState, useEffect, Component, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Loading, LoadingSendMessage} from "../pages"
import getProductData  from "../product/dataService";
import {CommentList, CreateComment} from "../comment"
import AppContext from "../../Context/appContext";

//if we want to import this component like a module we must export component like below
export function ProductDetail(){

    const [state, setState] = useState({
        pictureUrl:"",
        title:"",
        description:"",
        price:"",
        loading:false,
        itemKey:""
    });
    const [commentList, setCommentList] = useState([]);
    const params = useParams();

    const {dispatch} = useContext(AppContext)

    useEffect(()=>{
        setState({
            loading:true
        });

        getProductData.getProductById(params.id).then(result=>{
            const [itemKey, data] = result;
            if(data.comments != undefined)
            {
                setCommentList(
                    Object.entries(data.comments).map((item, index)=>{
                        return {
                            commentText: item[1].commentText,
                            commentTime: item[1].commentTime,
                            commentDate: item[1].commentDate,
                            userName: item[1].userName,
                        }
                    })
                );
            }
            
            setState({
                pictureUrl : data.pictureUrl,
                title : data.title,
                description : data.description,
                price : data.price,
                loading:false,
                itemKey : itemKey
            });
        });

    },[]);

    function addCommentToState(commentState){
        setCommentList(previousState=>{
            return[
                ...previousState,
                commentState
            ]
        });
    }

    function addProductToCart(){
        const {loading, ...product} = state;
        dispatch({type: "addToCart", payload: product})
    }


    if(state.loading)
    {
        return(                     
            <div className="w-100 d-flex justify-content-center align-items-center vh-100">
                <Loading/>
            </div>
        )
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src={state.pictureUrl} className="img-fluid"/>
                </div>
                <div className="col-6">
                    <h1>{state.title}</h1>
                    <p>{state.description}</p>
                    <p className="offerPrice">{`$${(parseInt(state.price)-120).toLocaleString()}`}</p>
                    <p className="previousPrice">{`$${(parseInt(state.price)).toLocaleString()}`}</p>
                    <button onClick={addProductToCart} className="btn btn-lg btn-success">
                        add to card
                        <i className="fa fa-cart-plus cartShopIcon" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            
            <div className="ProductDetails-commentPart">

                <div className="ProductDetails-commentList">
                {
                    commentList.length==0?
                    <div className="alert alert-primary">
                        No comment was found!
                    </div>:
                    <CommentList comments={commentList}/>
                }
                </div>

                <CreateComment addCommentToState={addCommentToState} itemKey={state.itemKey}/>

            </div>
        </div>
    )
}
// export default ProductDetail;
