import React from 'react';
import './FilterableProductTable.css';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends React.Component {

  state= {
    products: this.props.products,
  }

  filterProducts = typedProduct => {
    const filteredProducts = this.props.products.filter(product => {
      const isProductIncluded = product.name.toUpperCase().includes(typedProduct.name.toUpperCase());
      const hasStock = product.stocked;
      return typedProduct.showOnlyInStock ? isProductIncluded && hasStock : isProductIncluded;
    });
    this.setState({ products: filteredProducts });
  }
   

  render() {
    return (
      <div className="FilterableTable">
        <SearchBar filterProducts={ this.filterProducts } />
        <ProductTable products={ this.state.products } />
      </div>
    );
  }

} 


export default FilterableProductTable;