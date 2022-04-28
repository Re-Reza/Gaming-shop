import React, {useContext, useState, useEffect} from 'react';
import { CartListItemPage, CartDetail } from '../cart-page';
import AppContext from "../../../Context/appContext";

export function CartPage(){


    const {appState} = useContext(AppContext);
    const [state, setState] = useState({
        totalPrice:0,
    });

    useEffect(()=>{
        console.log(appState.cartItems);
        // let discount;
        let total = appState.cartItems.reduce((accumulator, currentItem)=>{
            return accumulator + (currentItem.count*parseInt(currentItem.price));
        }, 0);
        console.log(total);

        // const discount =  appState.cartItems.reduce(())
        setState({
            ...state,
            totalPrice: total
        })

    }, [appState.cartItems])

    return(
        <div className="container">

            <div className="cartPage-head"><h1>shopping cart</h1></div>
            <div className="row">
                <div className="col-8">
                    <CartListItemPage  />
                </div>
                <div className="col-4">
                    <CartDetail totalPrice={state.totalPrice}/>
                </div>
            </div>
            
        
        </div>
    )
}