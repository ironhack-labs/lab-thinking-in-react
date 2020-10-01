import React from 'react';
import data from '../data.json'
import ProductTable from './ProductTable'
import SearchBar from './Searchbar'
  state = {
    products: data.data,
    search: '',
    isFiltered: false,
  };
  productSearch = ({ target: { value: search } }) => {
    this.setState({ search });
  };

  filterProducts = () => {
    let inStock;
    if(this.state.isFiltered){
      inStock = data.data;
  } else {

      inStock = this.state.products.filter(
        (product) => product.stocked === true)
  }
  this.setState({ isFiltered: !this.state.isFiltered, products: inStock });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name
        .toLowerCase()
        .trim()
        .includes(this.state.search.toLowerCase().trim())
    );
    return (
      <div>
        <SearchBar search={this.state.search} onChange={this.productSearch} />
        <ProductTable products={this.state.products} filteredProducts={filteredProducts}/>
        <SearchBar
          search={this.state.search}
          onChange={this.productSearch}
          onClick={this.filterProducts}
        />
        <ProductTable
          products={this.state.products}
          filteredProducts={filteredProducts}
        />
      </div>
    );
  }
}