import React, { Component } from 'react';
import products from '../data.json'

import '../App.css';
import Searchbar from './Searchbar';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import ProductCategoryRow from './ProductCategoryRow';


class FilterableProductTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: products,
      origproducts: products,
      stock: false,

    }
  }

  searchFunction = (searchTerm) => {
    let theList = [...this.state.origproducts];
    theList = theList.filter((eachProduct)=> {
      return eachProduct.name.includes(searchTerm)
    })
      this.setState({products: theList})
  }

  showProducts = (category) => {
    return this.state.products.map((eachProduct, index)=> {
      if (eachProduct.stocked === false && eachProduct.category === category) {
        
        return <ProductRow compClass="outofstock" key={eachProduct.name} { ...eachProduct }/>

      }
      else if (eachProduct.category === category){

        return <ProductRow key={eachProduct.name} { ...eachProduct }/>
      }
    
  })
}
  showStock = (e) => {
    let theList = [...this.state.origproducts];
    if(this.state.stock === false) {
      
      this.setState({stock: true})
      theList = theList.filter((eachProduct)=> {
        return eachProduct.stocked === true
      })
      this.setState({products: theList})
    }
    else{

      this.setState({stock: false, products: theList})
    }
  
}

  render(){
    return(

      <div className="theTable">
      <h1>The Table Will Go Here</h1>
      <Searchbar handleSearch={this.searchFunction} handleInStock={this.showStock} />


  
  <ProductTable handleProducts={this.showProducts}/>
      </div>
    )
  }
}

export default FilterableProductTable