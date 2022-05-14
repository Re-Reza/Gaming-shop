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
    //     <div className="table-responsive">
    //     <table className="table">
    //         <thead>
    //           <tr>
    //             <th scope="col">#</th>
    //             <th scope="col">First</th>
    //             <th scope="col">Last</th>
    //             <th scope="col">Handle</th>
    //           </tr>
    //         </thead>
    //         <tbody class="table-group-divider">
    //           <tr>
    //             <th scope="row">1</th>
    //             <td>Mark</td>
    //             <td>Otto</td>
    //             <td>@mdo</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">2</th>
    //             <td>Jacjhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjob</td>
    //             <td>Thornton</td>
    //             <td>@fat</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">3</th>
    //             <td colspan="2">Larry the Bird</td>
    //             <td>@twitter</td>
    //           </tr>
    //         </tbody>
    //       </table>
    // </div>
    )
}