import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';




class Filterable extends React.Component {
  
  state = {
    dataArray: this.props.products
  }

  handleFilteredState = (inputVal) => {
    let filtered = this.state.dataArray.filter((el)=> el.name.toLowerCase().includes(inputVal));
    this.setState ({
      dataArray: filtered
    })
  }

  handleCheckStock = (check) => {
    let stock = this.state.dataArray;
    if(!check) {
      let newstock = stock.filter((el)=> el.stocked === true);
        this.setState ({
          dataArray: newstock
        }) 
    }else{
      this.setState ({
        dataArray: this.props.products
      })
    }
  }

  render() {
    return (
       <div className="filterable">
        <h1>IronStore</h1>
        <SearchBar filtered={this.handleFilteredState} checkStock={this.handleCheckStock}/>
        <ProductTable filteredProducts={this.state.dataArray}/>
      </div>
    )
  }
}

export default Filterable;