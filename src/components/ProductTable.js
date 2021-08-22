import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    return (
      <>
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="round-corner-left">Name</th>
              <th className="round-corner-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((productObj) => {
              return <ProductRow key={productObj.id} {...productObj} />;
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
