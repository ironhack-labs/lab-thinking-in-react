import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    searchValue: '',
  };

  render() {
    const { search } = this.state;
    const { products } = this.props;

    return (
      <div className="Filter">
        <h1>IronStore</h1>
        <SearchBar
          search={search}
          onSearchValue={(receivedValue) =>
            this.setState({ searchValue: receivedValue })
          }
        />
        <ProductTable searchValue={search} products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
