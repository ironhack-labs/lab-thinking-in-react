import React, { Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow'

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <ProductCategoryRow />
                <ProductRow />
            </div>
        )
    }
}
