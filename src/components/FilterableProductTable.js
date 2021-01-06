import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import data from '../data.json';

class FilterableProductTable extends React.Component {
  state = {
    data: this.props.products,
    searchValue: '',
  };

  searchProduct = (evt) => {
    this.setState({
      searchValue: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        {' '}
        <h1>Ironstore</h1>
        <SearchBar onChange={() => this.searchProduct(this.state)} />
        <ProductTable products={this.state.data} />
      </div>
    );
  }
}
export default FilterableProductTable;
