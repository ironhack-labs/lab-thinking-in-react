import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render () {
    console.log (data);
    //destructure not to repeat this.state:
    const {data} = this.props.state;

    // showing the number of products in the output:
    const count = data.length;
    if (count === 0) return <p>There are no products to show.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} products</p>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="row" />
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map ((d, index) => (
              <ProductRow
                getSortedList
                key={d.index}
                name={d.name}
                price={d.price}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductTable;
