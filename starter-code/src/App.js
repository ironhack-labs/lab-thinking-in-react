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
    }
  }

  setSearchTerm = (typedText) => {
    let clone = [...this.state.allTheProducts]
    console.log(typedText)
    let filteredList = clone.filter((eachItem)=>{
      return eachItem.name.toUpperCase().includes(typedText.toUpperCase())
    })

    this.setState({visibleProducs: filteredList})
    
  }

  // search = (e) => {
  //   let clone = [...this.state.allTheProducts]
  //   console.log(clone)
  //   let filteredList = clone.filter((eachItem)=>{
  //     return eachItem.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
  //   })

  //   console.log(filteredList)
  //   this.setState({visibleProducs: filteredList})
  
  // }


  //write a function to set state of searchterm = whatever argument I recieve then based onthat argument filter the visible producxts
  //take this function and pass it to searchbar through props
  //call that function in searchbar onchange

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div className="search-div">
          <SearchBar sendToParent = {this.setSearchTerm} />
        </div>
        <div className="product-table">
          <ShowAllProducts allVisibleProducts={this.state.visibleProducs} />
        </div>
       
      </div>
    );
  }
}

export default App;
