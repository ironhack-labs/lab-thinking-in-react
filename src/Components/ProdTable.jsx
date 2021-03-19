import React, { PureComponent } from 'react'

export class ProdTable extends PureComponent {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
          product.name :
          <span style={{color: 'red'}}>
            {product.name}
          </span>;
    
        return (
          <tr>
            <td>{name}</td>
            <td>{product.price}</td>
          </tr>
        );
      }
    }
    
    class ProductTable extends React.Component {
      render() {
        const rows = [];
        let lastCategory = null;
        
        this.props.products.forEach((product) => {
          if (product.category !== lastCategory) {
            rows.push(
              <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
          }
          rows.push(
            <ProductRow
              product={product}
              key={product.name} />
          );
          lastCategory = product.category;
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

export default ProdTable
