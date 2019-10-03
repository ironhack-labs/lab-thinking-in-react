import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
      
      super(props);
      
      this.state= {
      
          products: this.props.products.data,
          filteredProducts: this.props.products.data,
          checkStock: this.props.products.data
        }
      }
      search(e) {
        // console.log(this.state.checkStock)
        let filteredBySearch= [...this.state.products];
        let newProducts = filteredBySearch.filter(product => {
          return product.name.toLowerCase().includes(e.target.value)
        });
        let newstate= {
          ...this.state,
          filteredProducts: newProducts
        }
        this.setState(newstate);
      }
      filterByStock (e) {
        console.log(e.target.checked)
        
        let previousState = [...this.state.filteredProducts]
        let onStock= [...this.state.filteredProducts];
        if(e.target.checked) {
          let newProducts = onStock.filter(product => {
            return product.stocked;

          }
          );
          let newstate= {
            ...this.state,
            filteredProducts: newProducts,
            checkStock: previousState
          }
          this.setState(newstate);
        }
        else {
          let newstate= {
            ...this.state,
            filteredProducts: this.state.checkStock
          }
          this.setState(newstate);
        }
      }

      
      render() {
        // console.log(this.props.products.data)
    return (
      <div className="container-app">
        <h1>Ironstore</h1>
        <SearchBar products={this.state.filteredProducts} searchFunction={(e) => this.search(e)} checkFunction = {(e)=>this.filterByStock(e)}></SearchBar>
        <ProductTable products={this.state.filteredProducts}>

        </ProductTable>

        

      </div>
    )
  }
}
