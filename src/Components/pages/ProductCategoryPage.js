import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProductData} from "../product";
import { ProductCategory } from './Home';
import {Loading} from "./";

export function ProductCategoryPage(){

    const params = useParams();

    const [state, setState] = useState({
        category:"", 
        products:[],
        loading:false,
    });

    useEffect(()=>{
        (async function(){
            setState(previousState=>{
                return{
                    ...previousState,
                    loading:true,
                }
            });

            const data = await getProductData.getProducts(params.category);

            setState(previousState=>{
                return{
                    ...previousState,
                    category:data.category,
                    products: data.products,
                    loading:false,
                }
            });

        })(); 

    }, [params.category]);

    return(
        <div className="product-category-page">
        {
            state.loading?
            <div className="loading-container">
                <Loading/>
            </div>
            :
            <div className="product-category-page-itemsContainer">
                <ProductCategory itemQuantity={state.products.length} view={false} category={state} />
            </div>
        }
        </div>

    )
}