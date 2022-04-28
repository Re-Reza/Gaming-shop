import React,{Component} from 'react';

export class CartDetail extends Component {

    render(){
        const {totalPrice} = this.props;

        return(
            <div className="cartPage-cartDetailContainer">
                <h3>cart details</h3>
                <div>
                    <div className="cartPage-cartDetail">Total: <span>${totalPrice.toLocaleString()}</span></div>
                    <div className="cartPage-cartDetail text-danger">Discount: <span>$</span></div>
                    <div className="cartPage-cartDetail text-success">Price: <span>${}</span></div>
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
