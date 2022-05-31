import React, { Component, useContext } from 'react';
import { getProductData } from "../../product";
import { Loading } from "../Loading";
import { Slider, SpecialOffers, ProductsCategorySample, TrustPanel } from "./";
import "../../../css/home.css";


export class Home extends Component {

    state = {
        products: [],
        loading: true
    }

    componentDidMount(){
        document.title="Home";
        const { params } = this.props;

        getProductData.getProducts(params).then(result => {
            this.setState({
                loading: false,
                products: result
            });
        });
    }

    render() {

        return (
            <div id="home">
                <div className="home-sliderContainer">
                    <Slider />
                </div>

                {
                    this.state.loading ?
                        <div className="loading-container">
                            <Loading/>
                        </div>
                        :
                        <>
                            <section className="home-specialOfferContainer">
                                <SpecialOffers products={this.state.products} />
                            </section>

                            <TrustPanel/>

                            <section className="home-products-sample">
                                <ProductsCategorySample products={this.state.products} />
                            </section>
                        </>
                }

            </div>
        )
    }
}
