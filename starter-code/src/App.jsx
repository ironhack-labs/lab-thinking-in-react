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
      onlyStock: "checked",
      categorySearch: ''
    }
  }

   searchItem = (e) => {

      this.setState({
      itemToSearch: e.currentTarget.value
    })

    let newList = [...this.state.itemList]

    let filterList = newList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(this.state.itemToSearch.toLowerCase()) === true;
    })

  this.setState({
    filteredList: filterList,
  })

 if(this.state.filteredList.length !== 0){

    this.setState({
      categorySearch: this.state.filteredList[0].category
    })
  }else{
      this.setState({
      categorySearch: e.currentTarget.value
    })
  }
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

        <ProductTable dataToPass={this.displayAllItems()}  category={this.state.categorySearch}/>
      </div>
    );
  }
}

export default App;
