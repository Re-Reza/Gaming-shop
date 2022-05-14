import React from "react";
import {useNavigate} from "react-router-dom";
import "../../css/product.css";
import { Link } from 'react-router-dom';

export function Product(props)
{   

    console.log(props)
    const {description, pictureUrl, price, productId, title} = props.product

    return(
        <div className="productContainer">
            <div className="imgContainer">
                <img src={pictureUrl} className="card-img-top" alt="product-picture" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="offerPrice">{`$${(parseInt(price)).toLocaleString()}`}</p>
                <p className="previousPrice">{`$${(parseInt(price)).toLocaleString()}`}</p>
                <p className="card-text">{description}</p>
                <Link to={`/product-detail/${pictureUrl}`} className="btn btn-primary">show more</Link>
            </div>
        </div>
    )
}

// export default Product;