import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    console.log('props from ProductTable: ', props)
    
    return (
        <table id="table">
            <thead style={{backgroundColor: "lightgrey", padding: "5px"}}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductRow products={props.products} state={props.state} />
            </tbody>
        </table>
    );
}

export default ProductTable;