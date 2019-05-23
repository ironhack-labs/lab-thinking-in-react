import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render () {
    // showing the number of products in the output:
    const count = this.props.products.length;
    if (count === 0) return <p>There are no products to show.</p>;

    console.log (this.props.products);
    console.log ('The word you are looking is: ', this.props.searchWord);

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
            {this.props.products.map ((p, index) => {
              if (
                p.name
                  .toLowerCase ()
                  .includes (this.props.searchWord.toLowerCase ())
              ) {
                return (
                  <ProductRow
                    key={index}
                    name={p.name}
                    price={p.price}
                    stocked={p.stocked}
                  />
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductTable;
