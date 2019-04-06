import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render () {
        return (
            <div className="ProductTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;