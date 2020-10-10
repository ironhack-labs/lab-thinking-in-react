import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    filtered : this.props.products.data,
  };

  filterProduct = (search) => {
      const filteredProd = this.state.products.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      )
      this.setState({ filtered: filteredProd});
      console.log( "c'est moi",filteredProd)
    };
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProduct={this.filterProduct} />
        <ProductTable filtered={this.state.filtered} />
      </div>
    );
  }
}

export default FilterableProductTable;
