import React, { Component } from 'react';
import './App.css';
import ShowAllProducts from './components/producttable/ShowAllProducts';
import data from './data.json'
import SearchBar from './components/searchbar/SearchBar';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      allTheProducts: data.data,
      visibleProducs: data.data,
      searchInput: '',
      checkBox: false
    }
  }

  setSearchTerm = (typedText) => {
    let clone = [...this.state.allTheProducts]
    console.log(typedText)
    let filteredList = clone.filter((eachItem)=>{
      if(this.state.checkBox){
        return eachItem.name.toUpperCase().includes(typedText.toUpperCase()) && eachItem.stocked
      } else {
        return eachItem.name.toUpperCase().includes(typedText.toUpperCase())
      }
    })
    this.setState({searchInput: typedText, visibleProducs: filteredList})
  }

  checkCheckbox = async () => {
    await this.setState({checkBox: !this.state.checkBox});
    this.setSearchTerm(this.state.searchInput);

  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div className="search-div">
          <SearchBar sendToParent = {this.setSearchTerm} checkCheckbox={this.checkCheckbox} />
        </div>
        <div className="product-table">
          <ShowAllProducts allVisibleProducts={this.state.visibleProducs} />
        </div>
       
      </div>
    );
  }
}

export default App;
