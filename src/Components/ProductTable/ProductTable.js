import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

class ProductTable extends React.Component {
    render() {
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                 {this.props.products.map(product => <ProductRow productRow={product}/>)}       
            </table>
        );
    }
}

export default ProductTable;


