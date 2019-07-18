import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Componentes/FilterableProductTable/FilterableProductTable';
import data from './data.json'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: data.data,
      filterQuery: "",
      filteredProducts: data.data,
      check: false
    }

  }


  // filterCheckAndText(e) {
  //   if (e.target.value) {
  //     const filter = e.target.value
  //     let filteredProducts = this.state.products.filter((product) =>
  //       product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  //     )
  //     this.setState({
  //       ...this.state,
  //       filterQuery: filter,
  //       filteredProducts: filteredProducts
  //     })
  //   }
  //   if (e.target.checked) {
  //     e.preventDefault();
  //     const filterCheck = e.target.checked
  //     console.log(filterCheck)
  //     let filteredProducts
  //     if (filterCheck) {
  //       filteredProducts = this.state.filteredProducts.filter((product) =>
  //         product.stocked === filterCheck)
  //     } else {
  //       filteredProducts = this.state.filteredProducts
  //     }
  //     this.setState({
  //       ...this.state,
  //       filteredProducts: filteredProducts
  //     })
  //   }
  // }


  filterP(e) {
    const filter = e.target.value
    let filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    )
    this.setState({
      ...this.state,
      filterQuery: filter,
      filteredProducts: filteredProducts
    })
  }

  checkFilter(e) {
    const filter = e.target.checked
    let newState = { ...this.state }
    let filteredProducts
    if (filter) {
      filteredProducts = this.state.filteredProducts.filter((product) =>
        product.stocked === filter)
    } else {
      filteredProducts = this.state.filteredProducts
    }
    this.setState({
      ...this.state,
      filteredProducts: filteredProducts
    }, () => {
      this.state.filteredProducts = [...newState.filteredProducts]
      //Esta setState no tira, por eso lo estamos mutando a cholon 
      //this.setState({
      //   ...this.state,
      //   filteredProducts: [...newState.filteredProducts]
      // })
    }
    )
  }



  render() {

    return (
      <React.Fragment>
        <h1>IronStore</h1>

        <FilterableProductTable
          products={this.state.products}
          filterP={(e) => this.filterP(e)}
          filterQuery={this.state.filterQuery}
          filteredProducts={this.state.filteredProducts}
          checkFilter={(e) => this.checkFilter(e)}
        // filterCheckAndText={(e) => this.filterCheckAndText(e)}
        />

      </React.Fragment>
    );
  }
}

export default App;
