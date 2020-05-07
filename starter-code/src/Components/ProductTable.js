import React from 'react';
import ProductRow from './ProductRow';
import '../App.css';

//render function in class component is the fuction in the function component XD
//no need for "this" in functional component, only need for class
//props is from the parent
function ProductTable(props) {
    const productsRows = props.products.map((product) => {
        return (
            <ProductRow 
            name={product.name}
            price={product.price}
            stocked={product.stocked}
            />
        )  
    });

    return (
    <div>
        <table style={{ width: '50%' }}>
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
            {/* productRows is a const array so use {}; component uses </> */}
            {productsRows}
        </table>
    </div>
    );
}

  export default ProductTable;