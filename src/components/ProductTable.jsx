import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
    render() {
        return (
            <div style={{ marginLeft: 640, marginTop: 50 }}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product, i) => {
                            return <ProductRow key={i} products={product} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;