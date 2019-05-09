import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import data from './../data.json'

class FilterableProductTable extends Component{
  constructor(){
      super();
      this.state= {
        products: data.data  
      }
  this.searchProductHandler = this.searchProductHandler.bind(this);
//   console.log(data)

  }
  
  
  searchProductHandler(OneProduct) {
    const productCopy = [...data.data];  
    let onStock =[];
     if(!OneProduct.stocked){
       onStock = productCopy.filter(e =>
        e.stocked        
       );                  
     }else{
        onStock = productCopy;
     }
     console.log(onStock);

    const searchedProduct = onStock.filter(e =>
        e.name.toLowerCase().includes(OneProduct.name.toLowerCase())        
    );    
    this.setState({
      products: searchedProduct,
    })
    // console.log(this.state.products)
  }


  render(){
    return (
        <div>
            <SearchBar SearchBar= {this.searchProductHandler}/>
            <ProductTable data ={this.state.products} />
        </div>
      )  
    }  
}

export default FilterableProductTable;