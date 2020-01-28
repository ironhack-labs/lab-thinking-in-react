import React, { Component } from 'react';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      stockedFilter: false,
    };
  }

  handleSearch = event => {
    this.setState({ searchInput: event.target.value });
  };

  toggleStockedFilter = () => {
    this.setState({ stockedFilter: !this.state.stockedFilter });
  };

  render() {
    //console.log("props in FilterableProductTable ", this.props.parentCallback.data);
    const searchInput = this.state.searchInput.toLowerCase();
    const stockedFilter = this.state.stockedFilter;

    const filteredByStock = this.props.parentCallback.data.filter(product => product.stocked && product)
    const stockedProducts = stockedFilter ? filteredByStock : this.props.parentCallback.data

    const filteredProducts = stockedProducts.filter(product =>
      product.name.toLowerCase().includes(searchInput)
    );

    
    console.log('stocked Products', stockedProducts);
    console.log('Checkbox Zustand ', this.state.stockedFilter);

    return (
      <div>
        <div>
          <p>
            <input
              type="search"
              onChange={this.handleSearch}
              value={this.state.searchInput}
            />
            Search
          </p>
          <p>
            <input
              type="checkbox"
              onChange={this.toggleStockedFilter}
              checked={this.state.stockedFilter}
            />
            Only show products on stock
          </p>
        </div>

        <ProductTable parentCallback={filteredProducts} />
      </div>
    );
  }
}
