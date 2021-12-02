import React from 'react';
import ProductRow from './ProductRow'

function ProductTable (props) {
  return (
	<div>
        
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr>
            
        
            {props.search.map(elm => <ProductRow name={elm.name} price={elm.price} />)}
    

        </tr>

    </table>

            
    </div>
  );
}

export default ProductTable;