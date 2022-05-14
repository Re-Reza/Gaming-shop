import React,{Component} from 'react';

export class CartDetail extends Component {

    render(){
        const {totalPrice, totalDiscount} = this.props;

        return(
            <div className="cartPage-cartDetailContainer">
                <h3>Cart details</h3>
                <div>
                    <div className="cartPage-cartDetail mb-2">Total: <span>${totalPrice.toLocaleString()}</span></div>
                    <div className="cartPage-cartDetail mb-2 text-danger">Discount: <span>${totalDiscount.toLocaleString()}</span></div>
                    <div className="cartPage-cartDetail mb-2 text-success">Price: <span>${(parseFloat(totalPrice)-parseFloat(totalDiscount)).toLocaleString()}</span></div>
                </div>
                <div className="cartPage-cartDetail-Payment">
                    <i className="fa fa-cc-visa" aria-hidden="true"></i>
                    <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                    <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                    <i className="fa fa-cc-discover" aria-hidden="true"></i>
               </div>
               <button className="btn btn-lg btn-success">Purchase</button>
            </div>
        )
    }
} 
