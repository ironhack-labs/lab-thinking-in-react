import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';




class Filterable extends React.Component {
  
  state = {
    dataArray: this.props.products
  }

  handleFilteredState = (inputVal) => {
    let filtered = this.props.products.filter((el)=> el.name.toLowerCase().includes(inputVal));
    this.setState ({
      dataArray: filtered
    })
  }

  handleCheckStock = (check) => {
    if(check) {
      let stock = this.state.dataArray.filter((el)=> el.stocked === true);
      return (
        this.setState ({
          dataArray: stock
        })
      )
    } 
  }

  render() {
    return (
       <div className="filterable">
        <h1>IronStore</h1>
        <SearchBar filtered={this.handleFilteredState} ckeckStock={this.handleCheckStock}/>
        <ProductTable filteredProducts={this.state.dataArray}/>
      </div>
    )
  }
}

export default Filterable;