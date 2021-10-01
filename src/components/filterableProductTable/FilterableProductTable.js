import React from 'react';
import SearchBar from '../searchbar/SearchBar.js'
import ProductTable from '../productTable/ProductTable.js';


class FilterableProductTable extends React.Component {

  state = {
    products: this.props.products,
  };

  searchProducts = (searchInput) => {
    const filteredProducts = this.props.products.filter((product) => {
      const lowerCaseProduct = product.name.toLowerCase()
      const lowerCaseSearchInput = searchInput.toLowerCase()
      return lowerCaseProduct.includes(lowerCaseSearchInput)
    })

    this.setState({ products: filteredProducts })
  }

  render() {
    return (
      <div>
        <SearchBar searchProducts={this.searchProducts} />
        <ProductTable data={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;