import React from "react";
import "../../css/cart.css";

export class CartIcon extends React.Component {


    toggleShowCartCall(){

        this.props.toggleShowState();
    }

    render(){
        
        return(
            <div onClick={this.toggleShowCartCall.bind(this)} className="shopCart-container rounded-pill">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="badge rounded-pill bg-danger ">{this.props.cartItems.length}</span>
            </div>
        )
    }
}