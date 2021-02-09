import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    filterProducts: [...this.props.products],
    showOnStock: false,
  };

  handleProductSearch = (searchValue) => {
    const filterProducts = this.state.products.filter((elm) =>
      elm.name.toUpperCase().includes(searchValue.toUpperCase())
    );
    this.setState({
      filterProducts: filterProducts,
    });
  };

  showOnStock = () =>{
      this.setState({
          showOnStock: true,
      })
      console.log(this)
      //Not ready!!!!!
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <div>
          <SearchBar filterProducts={this.handleProductSearch} />
          
        </div>
                <div className="form-check m-2">
        <input className="form-check-input" onChange={this.showOnStock} type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
            Only show products on stock
        </label>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
          <ProductTable productList={this.state.filterProducts} />
          </tbody>
        </table>
      </div>
    );
  }
}
