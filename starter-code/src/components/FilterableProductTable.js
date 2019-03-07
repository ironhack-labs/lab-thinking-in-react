import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'
import '../App.css';
import { data } from '../data.json'

class FilteredProductTable extends Component {

  state = {
    products:data, //filtered data 
    allProducts:data, //old data 
    search:''

  }

  
  filterProducts = (search) => {
   // e.preventDefault()
    //let search = search.target.value
    let newProducts = [...this.state.allProducts]
    console.log('filterProducts is called', newProducts, search)

    newProducts = newProducts.filter((product) => {
      //console.log('list gets filtered', allProducts)
      return product.name.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({
      products:newProducts
    })
  }
  //addfunctionsHere = () => {change ur state above}

  render() {
    
    return (
      <div className="App">
        <header className="FilteredProductTable">
          <h1>IronStore</h1>
          <SearchBar filterTheProducts={this.filterProducts}/>
          <ProductTable
            products={this.state.products}
            //addfunctions={this.addfunctionsHere}
           />
        </header>
      </div>
    );
  }

}

export default FilteredProductTable;
