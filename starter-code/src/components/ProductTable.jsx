import React, {Component} from 'react';
import ProductRow from './ProductRow';
import data from '../data.json';

class ProductTable extends Component {
  state = {
    data: data.data,
  };

  handleStocked = () => {
    let font = '';
    font += this.state.data.stocked === false ? 'text-danger' : 'text-primary';
  };

  // handleSearch = e => {
  //   let search = this.state.data.filter (s => s.name == name);
  //   this.setState ({data: search});
  // };

  // handleChange = e => {
  //   let { name, value, checked, type } = e.target;

  //   if (type === "checkbox") {
  //     value = checked;
  //   }

  //   this.setState({
  //     [name]: value
  //   });
  // };

  render () {
    console.log (this.state.data);

    // showing the number of products in the output:
    const count = this.state.data.length;
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
            {this.state.data.map ((d, index) => (
              <ProductRow
                key={d.index}
                name={d.name}
                price={d.price}
                stocked={this.handleStocked}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductTable;
