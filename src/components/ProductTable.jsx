import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
      const rows = [];
      
      this.props.products.forEach((product) => {
       
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
    
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  

export default ProductTable
