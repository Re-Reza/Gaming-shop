import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, LoadingSendMessage } from "../pages"
import { getProductData } from "../product";
import { CommentList, CreateComment } from "../comment"
import { AppContext, ProductDetailContext } from "../../Context";
import "../../css/product-detail.css";

//if we want to import this component like a module we must export component like below
export function ProductDetail() {

    const [state, setState] = useState({
        pictureUrl: "",
        title: "",
        description: "",
        price: "",
        loading: false,
        itemKey: "",
        discount: undefined,
        comments: [],
    });

    const { category, productId } = useParams();

    const { dispatch } = useContext(AppContext);

    useEffect(() => {

        document.title = "product detail"
        setState({
            ...state,
            loading: true
        });

        getProductData.getProductById(category, productId).then((result) => {
            let commentList = []; 
            if(result.comments != undefined && result.comments != null) {
                commentList = Object.entries(result.comments).map(item=>{
                    console.log(item[1]);
                    return item[1];
                });
            }
            console.log(commentList);
            
            setState({
                pictureUrl: result.pictureUrl,
                title: result.title,
                description: result.description,
                price: result.price,
                loading: false,
                itemKey: productId,
                discount: result.discount,
                comments: commentList,
            });

        });

    }, []);

    function addCommentToState(newComment){
        setState(previousState=>{
            return {
                ...previousState,
                comments : [...previousState.comments, newComment]
            }
        })
    }

    function addProductToCart() {
        const { loading, ...product } = state;
        dispatch({ type: "addToCart", payload: product })
    }

    const zoomImg = () => {
        let img = document.querySelector(".productDetail-productInfo-picContainer");
        img.classList.toggle("zoomIn");
    }

    let discount = state.discount == undefined ? 0 : state.discount;


    if (state.loading) {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center vh-100">
                <Loading />
            </div>
        )
    }
    return (
        <div className="productDetail mt-5">
            <div className="productDetail-productInfo">
                <div className="productDetail-productInfo-picContainer normal-zoom" onClick={zoomImg}>
                    <img src={state.pictureUrl} className="img-fluid" />
                </div>
                <div className="productDetail-productInfo-details">
                    <h1>{state.title}</h1>
                    <p className="description">{state.description}</p>
                    <p className="offerPrice">{`$${(parseInt(state.price) - discount).toLocaleString()}`}</p>
                    {
                        state.discount == undefined ? <></> : <p className="previousPrice">${parseFloat(state.price)}</p>
                    }
                    <button onClick={addProductToCart} className="btn btn-lg btn-success">
                        add to card
                        <i className="fa fa-cart-plus cartShopIcon" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <ProductDetailContext.Provider value={{
                category:category, 
                productId:productId,
                addCommentToState:addCommentToState,
            }}>
                <div className="ProductDetails-commentPart">

                    <div className="ProductDetails-commentList">
                        {
                            state.comments.length == 0 ?
                                <div className="alert alert-warning">
                                    No comment was found!
                                </div> :
                                <CommentList comments={state.comments} />
                        }
                    </div>

                    <CreateComment />

                </div>
            </ProductDetailContext.Provider>

        </div>
    )
}
// export default ProductDetail;
