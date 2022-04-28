import React from "react";
import { ProductCategory } from "./ProductCategory";

export function ProductList(props){
    console.log(props.products);
    return(
        <div className="row">
        {   
            props.products.map((item, index)=> <ProductCategory products={item} key={index} /> )
        }
        </div>
    )
}