import React from 'react';
import { ProductCategory } from './';

export function ProductsCategorySample(props){

    console.log(props.products);

    return(
        <div>
        {
            props.products.map(function (item, index){
                return <ProductCategory itemQuantity={6} view={true} category={item} key={index}/>
            })
        }
        </div>
    )
}