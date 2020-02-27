import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

class App extends Component {
  state = {
    products: data.data,
    productsChe: data.data,
    allProducts: data.data,
    stock: false,
    search: ''
  };
  searchProduct(e) {
    let search = e.target.value;
    this.searchProductApp(search);
  }
  searchProductApp(e) {
    console.log(e);
    console.log(this.state.allProducts);
    let currentList = [];
    let newList = [];
    if (e !== '') {
      currentList = this.state.allProducts;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.allProducts;
    }
    this.setState({
      products: newList,
      search: e
    });
  }
  filterStock(e) {
    let checkBoxDOM = document.querySelector('input:checked');
    let stockedFilter = [];
    let currentList = [];
    if (checkBoxDOM !== null) {
      currentList = this.state.products;
      stockedFilter = currentList.filter(prod => prod.stocked);
      this.setState(
        {
          preSearch: this.state.products,
          products: stockedFilter,
          stock: !this.state.stock
        },
        this.searchProductApp(this.state.search)
      );
    } else {
      console.log(this.state.search);
      stockedFilter = this.state.products;
      this.setState(
        {
          stock: !this.state.stock,
          preSearch: this.state.products
          // products: this.state.preSearch
        },
        this.searchProductApp(this.state.search)
      );
    }
    console.log(stockedFilter);
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={this.state.products}
          functionSearchBar={e => this.searchProduct(e)}
          functionCheckBox={e => this.filterStock(e)}
        ></FilterableProductTable>
      </div>
    );
  }
}

export default App;
