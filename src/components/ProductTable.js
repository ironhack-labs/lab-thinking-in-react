import React from 'react';
import ProductRow from './ProductRow';
import { v4 as uuidv4 } from "uuid";

const ProductTable = (props) => {
    const productRows = props.products.map(product => {
        const id = uuidv4();
        return (<ProductRow key={id} product={product} />);
    })
    return(
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{productRows}</tbody>
        </table>
    );
}

export default ProductTable;

// {
//   "category": "Sporting Goods",
//   "price": "$49.99",
//   "stocked": true,
//   "name": "Football"
// }