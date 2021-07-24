import React, { Component } from "react";
import products from "../data.json"
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
    state = {
        products,
    }


    render() {
        return (
            <>
                <div>
                    <strong>{console.log(this.state.products)}</strong>
                    <strong>Price</strong>
                </div>
                <div>
                    {/* {this.state.products.map((product, index) => { return(
                        <ProductRow name = {product.data.name} price = {product.data.price}/>
                    )
                    })} */}

                    <ProductRow name = 'Camisa' price = '100'/>
                </div>

           </>
        )   
    }
}