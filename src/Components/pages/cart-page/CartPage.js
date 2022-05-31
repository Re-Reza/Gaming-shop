import React, { useContext, useState, useEffect } from 'react';
import { CartListItemPage, CartDetail } from '../cart-page';
import { AppContext } from "../../../Context";

export function CartPage() {


    const { appState } = useContext(AppContext);
    const [state, setState] = useState({
        totalPrice: 0,
        totalDiscount: 0,
    });

    useEffect(() => {

        document.title = "Cart";
        let totalPrice = appState.cartItems.reduce((accumulator, currentItem) => {
            return accumulator + (parseInt(currentItem.price) * currentItem.count);
        }, 0);

        let totalDiscount = appState.cartItems.reduce((accumulator, currentItem) => {
            let discount = currentItem.discount == undefined || currentItem.discount == null ? 0 : currentItem.discount;
            return accumulator + (discount * currentItem.count);
        }, 0);


        setState({
            ...state,
            totalPrice: totalPrice,
            totalDiscount: totalDiscount,
        })

    }, [appState.cartItems]);



    return (
        <div className="container mb-5">
            {
                // appState.cartItems == 0 ?
                // <></>
                // :
                <>
                    <div className="cartPage-head"><h1 className="cartPage-title">Shopping cart</h1></div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 ">
                            <CartListItemPage />
                        </div>
                        <div className="col-md-8 col-sm-12 col-lg-4">
                            <CartDetail totalDiscount={state.totalDiscount} totalPrice={state.totalPrice} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}