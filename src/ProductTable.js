import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import { data } from './data.json';

export default class ProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data,
            categories: [...new Set(data.map(item => item.category))],
        };
    };

    orderItems() {
        const _items = [];
        this.state.categories.map(e => {
            _items.push(<ProductCategoryRow category={e}></ProductCategoryRow>)
            this.state.products.map(p => {
                if (p.category === e) _items.push(<ProductRow name={p.name} price={p.price}></ProductRow>)
            });
        });
        return _items
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.orderItems()}
                </tbody>
            </table>
        )
    };
};