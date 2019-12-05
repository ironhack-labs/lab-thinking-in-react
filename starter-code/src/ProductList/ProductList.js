import React, { Component } from 'react'
import Product from '../Product/Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <ul>
                    {this.props.products.map((product, idx) => {
                        if(product.stocked){
                           return(<Product hasStock key={idx} details={product} ></Product>)     
                        }else{
                            return(<Product key={idx} details={product} ></Product>)
                        }
                     })}
                </ul>
            </div>

        )
    }
}
