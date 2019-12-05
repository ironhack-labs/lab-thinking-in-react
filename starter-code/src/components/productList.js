import React, { Component } from 'react';
import ProductCard from './productCard';
import data from '../data.json';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      showStock: true,
      search: ''
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  showStockHandler = () => this.setState({showStock: !this.state.showStock})

  render() {

    const filterStock = this.state.data.filter(elm => elm.stocked === this.state.showStock);

    const filterList = () => {
      let items = this.state.search;
      return this.state.data.filter(
        elm => elm.name.toLowerCase().indexOf(items.toLocaleLowerCase()) > -1
      );
    };

    return (
      <>
        <h1>FEO PERO FUNCIONAL</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <div className="control">
                <input
                  value={this.state.search}
                  name="search"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="Search Product"
                />
              </div>
              <button onClick={this.showStockHandler}>
                {this.state.showStock ? (
                  <span>Tenemos!</span>
                ) : (
                  <span>No Tenemos!</span>
                )}
              </button>
              <table className="box-card">
                <thead>
                  <tr>
                    <th>
                      <h2>
                        <strong>Name</strong>
                      </h2>
                    </th>
                    <th>
                      <h2>
                        <strong>Price</strong>
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterList().map((elm, idx) => (
                    <ProductCard key={idx} {...elm} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h2>LO TENEMOS EN STOCK</h2>
              {filterStock.map((data, idx) => <ProductCard key={idx} {...data} />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
