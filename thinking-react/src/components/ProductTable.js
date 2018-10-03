import React, { Component } from 'react';
import data from '../data.json'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor(){
        super()
        this.state={data: data,
                    categories: ['Sporting Goods', 'Electronics']
        }

    }
    render() {
        return(
            <table>
                <p>ProductTable</p>
                <ProductCategoryRow name={this.state.categories[0]} />
                {

                    <ProductRow />
                }

                <ProductCategoryRow name={this.state.categories[1]} />
                {

                    <ProductRow />
                }
            </table>
        )
    }
}

export default ProductTable;