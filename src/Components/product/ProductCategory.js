import React from 'react';
import { Link } from 'react-router-dom';
import Product from "./Product";

export function ProductCategory(props)
{
    console.log(props.products)
    const {category, products} = props.products;
    return(
        <div className="productCategory-mainContainer">
            <Link to={`/products/${category}`} className="productCategory-categoryTitle">{category}</Link>
            <div className="productCategory-productsContainer">
            {
                products.map((item, index) => <Product product={item} key={index}/> )
            }
            </div>
        </div>
    )
}