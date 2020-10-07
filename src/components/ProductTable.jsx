import React, { Component } from 'react';
import ProductRow from './ProductRow';


class ProductTable extends Component {

    displayProduct() {
        let products = [];
        const data= this.props.products.data;
        const arr = data.map(item => products.push(<ProductRow product={item}/>))
        return products;
    }

    render() {
        return (
            <table>
                {this.displayProduct()}
            </table>
        )
    }
}

export default ProductTable;