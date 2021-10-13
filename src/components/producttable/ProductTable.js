import React, { Component } from 'react';
import './ProductTable.css';

import ProductRow from '../productrow/ProductRow'

export default class ProductTable extends Component {

    listProducts = () => 
        this.props.products.map((product, i) => {
            return(
                <tbody key={i}>
                    <tr>
                        <ProductRow product = {product}  />       
                    </tr>
                </tbody>
            )
        })
        
    

    render() {
        const products = this.props.products;
        // console.log(products);
        
        return (
            <div className="product-table">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>    
                        </tr>    
                    </tbody>
                        {this.listProducts()}
                </table>
            </div>
        )
    }
}
