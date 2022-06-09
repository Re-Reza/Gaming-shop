import React, {useContext} from "react"
import {AppContext} from "../../Context";

export function CartItem(props){

    const {title, price, pictureUrl, count,index, discount} = props.item;
    const {appState, dispatch} = useContext(AppContext);

    function deleteItemCall(){
        dispatch({type:"deleteItem", payload:props.item});
    }

    function addItemCall(){
        dispatch({type:"addToCart", payload:props.item})
    }

    return(
        <li className="list-group-item cartItem">
            <span className="cartItemIndex">{index+1}</span>
            <img width={170} src={pictureUrl} className="img-fluid img-thumbnail" alt={title}/>
            <div className="cartItem-infoPart">
                <div>Product: {title}</div>
                <div className="text-success">Price: ${( (price-parseFloat(discount))*count ).toLocaleString()}</div>
                <div className="cartItemOptionContainer">
                    <div className="cartItemOption-icons">
                        <i onClick={addItemCall} title="add" className="addCartItem text-success fa fa-plus-square-o"></i>
                        <i onClick={deleteItemCall} title="delete" className="deleteCartItem fa fa-minus-square-o text-danger"></i>
                    </div>

                    <span className="badge bg-dark">{count}</span> 
                </div>
            </div>
        </li>
    )
}