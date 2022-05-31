import React, {useState, useEffect} from 'react';
import {Loading} from '../Loading.js';
import {SpecialOfferProduct} from "./";

export function SpecialOffers(props){

    const {products} = props;

    const [state, setState] = useState({
        products:[],
        loading:false,
    });

    useEffect(()=>{
        setState({
            ...state,
            loading:true,
        });

        let productsArray=[];
        //better way instead map
        products.forEach(item=>{
            let tempArray = item.products.map((item2)=>{
                return{
                   ...item2,
                    category:item.category,
                }
            });
            productsArray=[...productsArray, ...tempArray];
        });

        setState({
            ...state,
            products:productsArray.filter(item=>{
                if(item.discount != 0 && item.discount != undefined)
                    return item;
                }),
            loading:false,
        });
    }, [props]);

    return(
        <div>
            <h3 className="specialOffers-title">Special offers</h3>
            <div className="specialOffers-itemsContainer">
            {
                state.loading?
                <Loading/>:
                state.products.map((item, index)=><SpecialOfferProduct showPrice={true} product={{...item}} key={index}/>)
            }
            </div>
        </div>
    )
}