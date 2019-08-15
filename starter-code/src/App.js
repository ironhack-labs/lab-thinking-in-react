import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';
import './App.css'
import CheckBox from './components/CheckBox.js';

class App extends Component {
  constructor(){
    super()

    this.state= {
      theData: data.data,
      allData: data.data,
      theString: "",
      theChecked: ""
    }

  }

  searchItem = string =>{
    let dataCopy = [...this.state.allData]
    dataCopy = dataCopy.filter((elm,idx) => {
     return elm.name.toLowerCase().includes(string.toLowerCase())
    })

    this.setState({
      theData: dataCopy,
      // allData: dataCopy
    })

    // this.setState({
    //   theString: string
    // })
  }

  isInStock = checked => {
    let dataCopy = [...this.state.theData]
    dataCopy = dataCopy.filter((elm,idx) => {
     return elm.stocked === checked
     
    })

    this.setState({
      theData: dataCopy,
      // allData: dataCopy
    })
    // this.setState({
    //   theChecked: checked
    // })
  }

  // filterProduct = () => {
  //   let dataCopy = [...this.state.allData]
  //   dataCopy = dataCopy.filter((elm,idx) => {
  //       return elm.name.toLowerCase().includes(this.state.theString.toLowerCase())
  //      }).filter((elm,idx) => {
  //          return elm.stocked === this.state.theChecked
          
  //        })
  // }

  render() {
  
    return (
      <div className="App">
        <div className="table">
        <FilterableProductTable products={ data } />
        <SearchBar searchItem={this.searchItem}/>
        <CheckBox isInStock={this.isInStock}/>
        <hr/>
        <ProductTable data={this.state.theData} />
        </div>
      </div>
    );
  }
}


export default App;
