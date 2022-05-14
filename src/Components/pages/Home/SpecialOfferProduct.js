import React from 'react';
import {Link} from "react-router-dom";

export function SpecialOfferProduct(props){

    const {pictureUrl, price, discount, title, productId, category} = props.product;
    const {showPrice} = props;
    console.log(category);

    return(
        <div className="specialOffer-item">
            <div className="specialOffer-item-imgContainer">
                <Link to={`/product-detail/${category}/${productId}`}> <img title="click to see details" src={pictureUrl} className="specialOffer-item-img" alt="product"/></Link>
                {
                    showPrice? <span className="badge specialOffer-item-badge rounded-pill bg-danger">${discount}</span>:<></>
                }
            </div>
            <div className="specialOffer-item-title">
                <span>{title}</span>
                {
                    showPrice?<span className="text-white badge bg-success">${parseInt(price)-parseInt(discount)}</span>:<></>
                    // add sth like button for details or add to cart
                }    
            </div>
        </div>
    )
}