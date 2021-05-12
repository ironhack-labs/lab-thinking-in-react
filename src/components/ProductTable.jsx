import React from 'react';
import 'bulma/css/bulma.css';
import SearchBar from './SearchBar'
import ProductRow from './ProductRow';


const ProductTable = ({products}) => {
    return (

        <div className="table-container">
        <table className="table table is-fullwidth">
        <thead>
          <tr>
        <th>Name</th>
        <th>Price</th>
      
        </tr>
        </thead>

        <tbody>
        {products.map(product => (
            <ProductRow {...product} key={product.id} />
          )
          )}
        
        </tbody>
        </table>
      </div>
    )
}

export default ProductTable;