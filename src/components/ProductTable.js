import React, { Component } from 'react';
import ProductRow from './ProductRow';
import 'bulma/css/bulma.css';

export default class ProductTable extends Component {
    render() {
        let productRow = this.props.products.map((product) => {
            return <ProductRow key={product.id} product={product} />
        })

        return (
                <table className="table is-striped container is-fluid">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRow}
                    </tbody>
                </table>
        )
    }
}
