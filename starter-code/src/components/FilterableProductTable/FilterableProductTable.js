import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state ={
            products: this.props.productsData,
            searchWord:'',
            onlyStock :false
        }
        console.log(this.props)
        console.log(this.state)
    }

    groupProducts = products=>{
        const groupedProducts = {};
        products.forEach(product => {
           if(groupedProducts[product.category]){
            groupedProducts[product.category].push(product);
           }else{
            groupedProducts[product.category] =[product]
           }
        });
        return groupedProducts;
    }

    handleChange =(event)=>{
        this.setState({...this.state,searchWord:event.target.value})
    }
    searchFilter(){
       return this.state.products.filter(product=>{

            if( product.name.match(new RegExp(this.state.searchWord,'i'))
                && ((this.state.onlyStock && product.stocked) || !(this.state.onlyStock))) {
                return product
            }
        })
    }

    handleStockChange=(e)=>{
        this.setState({...this.state,onlyStock:e.target.checked})
    }
 
  render() {
    let filteredProducts = this.searchFilter();
    return (
      <div>
        <SearchBar  handleChange={this.handleChange} handleStockChange={this.handleStockChange} />
        <ProductTable  products={this.groupProducts(filteredProducts) } />
      </div>
    )
  }
}
