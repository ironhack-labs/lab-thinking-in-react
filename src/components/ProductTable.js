import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
   listProducts = () => 
        this.props.products.map((product, i) => {
            return(
                <tbody key={i}>
                    <tr>
                        <ProductRow product = {product}  />       
                    </tr>
                </tbody>
            )
  
}
export default ProductTable;
