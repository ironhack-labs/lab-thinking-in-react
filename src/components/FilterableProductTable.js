import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    q: '',
    stockonly: false,
  };
  setQuery = (name, value) => {
    console.log('FilterableProductTable -> setQuery', name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar qq={this.state.q} setQueryChild={this.setQuery} />
        <ProductTable products={this.props.products} qqq={this.state.q} />
      </div>
    );
  }
}

export default FilterableProductTable;
