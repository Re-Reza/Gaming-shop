import React, {useContext} from "react";
import "../../../css/cartPage.css";
import { CartItemPage } from "./CartItemPage";
import AppContext from "../../../Context/appContext";

export function CartListItemPage()
{

    const {appState, dispatch} = useContext(AppContext);

    return(
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>

            <tbody>
            {
                appState.cartItems.map((item, index)=><CartItemPage dispatch={dispatch} item={{...item, index}} key={index}/>)
            }
            </tbody>
        </table>
    )
}