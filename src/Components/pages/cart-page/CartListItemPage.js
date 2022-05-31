import React, { useContext } from "react";
import "../../../css/cartPage.css";
import { CartItemPage } from "./CartItemPage";
import { AppContext } from "../../../Context";

export function CartListItemPage() {

    const { appState, dispatch } = useContext(AppContext);

    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appState.cartItems.map((item, index) => <CartItemPage dispatch={dispatch} item={{ ...item, index }} key={index} />)
                    }
                </tbody>
            </table>
        </div>
    )
}