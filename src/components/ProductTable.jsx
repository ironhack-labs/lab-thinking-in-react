import React from 'react';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow';



const ProductTable = ({productList}) => {
   
    return (
        

        <div className="table-container">
        <table className="table is-fullwidth">
        <thead>
          <tr>
        <th>Name</th>
        <th>Price</th>
      
        </tr>
        </thead>
        {productList.map(product => (
            <ProductRow {...product} key={product.id} />
          )
          )}
        
        </table>
      </div>
    )
}

export default ProductTable;