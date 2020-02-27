import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    allProducts: this.props.products,
    products: this.props.products

    // selectedProducts : []
  };

  // searchProduct(e) {
  //     let search = e.target.value;
  //     let currentList = [];
  //     let newList = [];
  //     if (search !== "") {
  //       currentList = this.state.allProducts;
  //       newList = currentList.filter(item => {
  //         const lc = item.name.toLowerCase();
  //         const filter = search.toLowerCase();
  //         return lc.includes(filter);
  //       });
  //     } else {
  //       newList = this.state.allProducts;
  //     }
  //     this.setState({
  //       products : newList
  //     });
  //   }

  _filterProducts(params) {
  
    
      let newList = [];
      if (params !== "") {
       let currentList = this.state.allProducts;
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          const filter = params.toLowerCase();
          return lc.includes(filter);
        });
      } else {
        newList = this.state.allProducts;
      }
      this.setState({
        products : newList
      });
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          onChange={params => this._filterProducts(params)}
        ></SearchBar>
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
