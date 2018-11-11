import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.json'
import productRow from './components/ProductRow'
import FilterableProductTable from './components/FilterableProductTable'
import 'bulma/css/bulma.css';

class App extends Component {
    constructor(){
      super();
      this.state = {
        theData : data, 
        filteredData: [],
        matchedItems: '',
        check: false
      }
    }
  
    handleChange(event) {
      // theDataCopy = [...this.state.theData]
      // theDataCopy.filter((item)=>{item.name.toLowerCase().includes(e.toLowerCase())})
      let { value } = event.target;
      this.setState({matchedItems: value});
    }

    handleCheckChange(event) {
      // theDataCopy = [...this.state.theData]
      // theDataCopy.filter((item)=>{item.name.toLowerCase().includes(e.toLowerCase())})
      let { checked } = event.target;
      this.setState({check: checked});
    }

    filteredItems;

  render() {
    if (this.state.check) {
      this.filteredItems = this.state.theData.filter(theItem => theItem.name.toLowerCase().includes(this.state.matchedItems.toLowerCase()) && theItem.stocked === true)
    } else {
      this.filteredItems = this.state.theData.filter(theItem => theItem.name.toLowerCase().includes(this.state.matchedItems.toLowerCase()))
    }
    // console.log(this.state.theData)
    return (
      <div className="App">
        <FilterableProductTable data={this.filteredItems} onChangeData={e => this.handleChange(e)} onChangeCheck={e => this.handleCheckChange(e)}/>
      </div>
    );
  }
}

export default App;
