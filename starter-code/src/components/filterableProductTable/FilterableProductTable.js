import React, { Component } from 'react';
import SearchBar from './searchBar/SearchBar';
import ProductTable from './productTable/ProductTable';

class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [...props.products],
    };
  }

  checkProduct = (search, inStock) => {
    let filteredSearch = this.props.products.filter((elm) =>
        elm.name.toLowerCase().includes(search.toLowerCase()) && (inStock ? elm.stocked : elm.stocked || !elm.stocked)
        //Filtramos por nombre y por si hay stock
        //BOOM
        //console.log('fuuuuuuuck')
    );

    this.setState({
      products: filteredSearch,
    });
  };

  render() {
    return (
      <>
        <SearchBar checkProduct={this.checkProduct} />
        <ProductTable products={this.state.products} />
      </>
    );
  }
}

export default FilterTable;
