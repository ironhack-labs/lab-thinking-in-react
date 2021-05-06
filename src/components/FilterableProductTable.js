import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    q: '',
  };
  setQuery = (queryParam) => {
    console.log('FilterableProductTable -> setQuery', queryParam);
    this.setState({
      q: queryParam,
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
