import React from "react";

export function CartItemPage(props){
    
    const {pictureUrl, title, price, count, index, discount}=props.item;
    const {dispatch} = props;

    function deleteItemCall(){
        dispatch({type:"deleteItem", payload:props.item});
    }

    function addItemCall(){
        dispatch({type:"addToCart", payload:props.item})
    }

    let decreasePrice = discount == undefined || discount == null ? 0 : discount;
    return (
        <tr className="cart-item">
           <th scope="row">{index+1}</th>
           <td className="cart-item-title">
               <img src={pictureUrl} width={100} alt="cart Item Image" className="me-2 img-fluid cartPage-itemImg"/>
               {title} 
            </td> 
           <td>${(price-decreasePrice).toLocaleString()}</td>
           <td>
                <i onClick={addItemCall} title="add" className="addCartItem text-success fa fa-plus-square-o"></i>
                <span className="ms-2 me-2">{count}</span>
                
                <i onClick={deleteItemCall} title="delete" className="deleteCartItem fa fa-minus-square-o text-danger"></i>
           </td>
           <td className="text-success">${((price*count)-decreasePrice*count).toLocaleString()}</td>
        </tr>
    )
}