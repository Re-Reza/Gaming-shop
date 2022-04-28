import React, { Component } from 'react';
import { ProductList } from "../../product";
import getProductData from "../../product/dataService";
import { Loading } from "../Loading";

export class Home extends Component {

    state = {
        products: [],
        loading: true
    }

    componentDidUpdate(prevProps, prevState){
        console.log("here");
        const { params } = this.props;
        console.log(params)
        getProductData.getProducts(params).then(result => {
            if(prevProps != this.props)
            {
                console.log(prevProps, this.props);
                this.setState({
                loading:false,
                products:result
                });
            }
        });
    }

    render() {
        console.log(this.state.products);
        return (
            <div className="container-md">
                {
                    this.state.loading ?
                        <div className="w-100 d-flex justify-content-center align-items-center vh-100">
                            <Loading />
                        </div>
                        :
                        <ProductList products={this.state.products} />
                }
            </div>
        )
    }
}