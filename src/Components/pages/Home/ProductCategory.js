import React from 'react';
import { Link } from 'react-router-dom';
import {SpecialOfferProduct} from "./"

export function ProductCategory(props){

    console.log(props.category);
    const {category, products} = props.category;
    const {view, itemQuantity} = props;

    return(
        <div className="product-category-container">

            <div className="product-category-head">
                <span>{category}</span>
                {
                    view?<Link className="btn view-btn btn-dark btn-lg" to={`products/${category}`}>view all</Link>:<></>
                }
            </div>

            <div className="product-category-items">
            {
                products.map((item, index)=>{
                    if(index<itemQuantity)
                    {
                        return <SpecialOfferProduct showPrice={false} product={{...item, category:category}} key={index}/>
                    }
                })
            }
            </div>
            
        </div>
    )
}