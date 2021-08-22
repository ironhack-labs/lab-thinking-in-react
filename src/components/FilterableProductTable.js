import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  render() {
    const { searchInput } = this.state;
    const filteredProducts = this.props.products.filter((productObj) =>
      productObj.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="header">
        <h1>IronStore</h1>
        <SearchBar
          handleSearchInput={(e) =>
            this.setState({ searchInput: e.target.value })
          }
          s
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
