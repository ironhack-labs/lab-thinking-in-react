import React from "react";
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import products from './../data.json';


class FilterableProductTable extends React.Component {
  state = {
    productsToDisplay: products.data,
    searchInputState: ''
  };

setSearchField = (searchInput) => {
    this.setState({searchInputState: searchInput})
}

  render() {

       let filteredProducts = this.state.productsToDisplay.filter((product) => {
         return product.name.toLowerCase().includes(this.state.searchInputState.toLowerCase());
       });
    
    return (
      <table>
        <thead className="title">IronStore</thead>
        <SearchBar
          listOfProducts={filteredProducts}
          setSearchField={this.setSearchField}
        />
        <ProductTable listOfProducts={filteredProducts} />
      </table>
    );
  }
}

export default FilterableProductTable;