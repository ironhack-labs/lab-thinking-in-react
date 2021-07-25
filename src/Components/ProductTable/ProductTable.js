//import React and stuff
import React, { Component } from "react";
//import Components
import ProductTableRow from "../ProductTableRow/ProductTableRow";
//import CSS
import './ProductTable.css'
//import Data
import products from '../../Data/data.json'

class ProductTable extends Component {
    state = {
        products: products,
    }
    render() {
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    {this.state.products.map((product) => 
                    <ProductTableRow 
                    key = {product.key} 
                    name={product.name}
                    price ={product.price} />)}
                </tr>
            </table>
        );
    }
}

export default ProductTable