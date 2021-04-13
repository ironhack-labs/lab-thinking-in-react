import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

function ProductTable(props) {
    const products = props.data.data
    //console.log(products)
    
    return (
        <div className="ProductTable container">
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
                <tbody>
                    {products.map(product => (
                        <ProductRow {...product} key={product.id}/>
                        )
                    )}
            </tbody>
            </table>
        </div>
    );
}

export default ProductTable;