import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
    render() {
        let productsArray = this.props.product.filter((prod) =>
            prod.name.toLowerCase().includes(this.props.searchValue.toLowerCase())
        );

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsArray.map((prod, index) => {
                            return <ProductRow key={index} name={prod.name} price={prod.price} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;