import React from "react";

export function CartItemPage(props){
    
    const {pictureUrl, title, price, count, index}=props.item;
    const {dispatch} = props;

    function deleteItemCall(){
        dispatch({type:"deleteItem", payload:props.item});
    }

    function addItemCall(){
        dispatch({type:"addToCart", payload:props.item})
    }

    return (
        <tr>
           <td>{index+1}</td>
           <td>
               <img src={pictureUrl} width={100} alt="cart Item Image" className="me-2 img-fluid"></img>
                <span>{title}</span>   
            </td> 
           <td>${(price-120)}</td>
           <td>
                <i onClick={addItemCall} title="add" className="addCartItem text-success fa fa-plus-square-o"></i>
                <span className="ms-2 me-2">{count}</span>
                <i onClick={deleteItemCall} title="delete" className="deleteCartItem fa fa-minus-square-o text-danger"></i>
           </td>
           <td><span className="text-success">${(price-120)*count} </span></td>
        </tr>
    )
}