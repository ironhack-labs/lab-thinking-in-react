import React from 'react';
import './App.css';
import CategoryRow from "./CategoryRow"
import ProductRow from "./ProductRow"

class Table extends React.Component {
  render() {
    return <div className="Table">
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
          </tr>
        </thead>

        {this.props.data.map((product, i) => {
          if (i > 0 && product.category === this.props.data[i - 1].category) {
            return (
              <tbody>
                <ProductRow data={product} />
              </tbody>
            )
          } else {
            return (
              <tbody>
                <CategoryRow data={product} />
                <ProductRow data={product} />
              </tbody>
            )
          }
        })}
        </table>
      </div>
  }
}

export default Table;
