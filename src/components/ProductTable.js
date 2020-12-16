import React from 'react';
import ProductRow from './ProductRow';


const ProductTable = (props) => {
    return (
        <div className="product-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th> 
                    </tr>
                </thead>
                <tbody> 
                    {props.products.map((element, i) => {
                        return <ProductRow key={ i } products={ element }></ProductRow>
                    }
                    )}
                </tbody> 
                </table> 
        </div>
    );
};

export default ProductTable;
