import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable'
import SearchBar from './components/SearchBar/SearchBar'
import data from './data.json'

console.log(data.data)

export default class App extends Component {

state = {data: data.data,
         filteredData: data.data,
         inputSearch:'',
         checkBoxValue:true}

inputSearchHandler = (searchValue) => {
  const searchedFoods = this.state.data.filter((product) => {
    return product.name.toLowerCase().includes(searchValue);
  });
this.setState({inputSearch:searchValue,
  filteredData:searchedFoods})
}

inputHandler = () => {
this.setState({checkBoxValue:!this.state.checkBoxValue})
const newArr = this.state.data.filter((product) => {
if (this.state.checkBoxValue === true) {
  return  product.stocked === true
}
else {
return product
}
})
this.setState({filteredData: newArr})
}

  render() {
    return (
      <div className="App">
<SearchBar searchValue={this.state.inputSearch} inputSearchHandler={this.inputSearchHandler} inputHandler={this.inputHandler}></SearchBar>       
<ProductTable products={this.state.filteredData}  checkBoxValue={this.state.checkBoxValue}></ProductTable>
      </div>
    );
  }
}
