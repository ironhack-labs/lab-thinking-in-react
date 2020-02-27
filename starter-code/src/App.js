import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

class App extends Component {
  state = {
    products: data.data,
    allProducts: data.data,
    stock: true
  };
  searchProduct(e) {
    console.log(this.state.allProducts);
    console.log(e.target.value);
    let search = e.target.value;
    let currentList = [];
    let newList = [];
    if (search !== '') {
      currentList = this.state.allProducts;
      console.log(currentList);
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = search.toLowerCase();
        console.log(lc);
        console.log(filter);
        return lc.includes(filter);
      });
    } else {
      newList = this.state.allProducts;
    }
    this.setState({
      products: newList
    });
  }
  filterStock(e) {
    let checkBoxDOM = document.querySelector('input:checked');
    let stockedFilter;
    if (checkBoxDOM !== null) {
      stockedFilter = this.state.products.filter(prod => prod.stocked);
    } else {
      stockedFilter = this.state.allProducts;
    }

    console.log(stockedFilter);
    this.setState({
      products: stockedFilter
    });
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
