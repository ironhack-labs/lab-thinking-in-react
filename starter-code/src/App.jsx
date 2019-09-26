import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';
import data from './data.json'

 class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      itemList: data.data,
      filteredList: [],
      itemToSearch:"",
      onlyStock: "checked"
    }
  }

  searchItem = (e) => {
    console.log(e.currentTarget.value);

    this.setState({
      itemToSearch: e.currentTarget.value
    })
    console.log("THE ITEM TO SEARCH IS " + this.state.itemToSearch)
    let newList = [...this.state.itemList]

    let filterList = newList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(this.state.itemToSearch.toLowerCase());
    })

  this.setState({
    filteredList: filterList
  })
  }

  displayAllItems = () => {
    if(this.state.itemToSearch === ""){
      return this.state.itemList
    }else{
      return this.state.filteredList
    }
  }

  showOnlyStock = () => {
    if(this.state.checked === "checked"){
    let newList = [...this.state.itemList]

    let stockList = newList.filter(eachItem =>{
      return eachItem.stocked === true
    })

    this.setState({
      checked: "",
      itemList: stockList
    })
  }else{
    this.setState({
      checked: "checked",
      itemList: data.data
    })
  }
  }


  render() {
    console.log(data.data);
    return (
      <div className="App">
        <div>
        <h1>IronStore</h1>
        <SearchBar searchTheItem={this.searchItem} 
        onlyStock={this.showOnlyStock}/>
        </div>

        <ProductTable dataToPass={this.displayAllItems()} searchOn={this.state.itemToSearch}/>
      </div>
    );
  }
}

export default App;
