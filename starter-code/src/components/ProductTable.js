import React, { Component } from 'react';
import ProductRow from './ProductRow';
//import ProductCategory from './ProductTable';

export default class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStock ;
        const rows = [];

        console.log(this.props.products);
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
              }
              if (inStockOnly && !product.stocked) {
                return;
              }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );

        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}