import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props){
    super(props)
    this.state={
      filtered: this.props.products.data,
      available: false
    }
  }
    filterList(search){
      let filteredProducts = this.props.products.data.filter(product => {
        if(this.state.available){
          return (product.name.toLowerCase().includes(search) && product.stocked)
        } else {
          return product.name.toLowerCase().includes(search)
        }
      })
      this.setState({
        filtered: filteredProducts
      })
    }
    availableProducts(checkValue){
      let availableProducts = this.props.products.data.filter(product => {
        return (this.state.available ? true : product.stocked === true)
      })
        this.setState({
          available: !this.state.available,
          filtered: availableProducts
        })
    }
    render() {
      
      return (
        <div className="FilterableProductTable">
            <h1>IronStore</h1>
            <SearchBar filterProducts={(query)=>this.filterList(query)} 
            onlyAvailable={(check)=>this.availableProducts(check)}/>
            <ProductTable data={this.state.filtered}/>
        </div>
      );
    }
  }
  
export default FilterableProductTable;