import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from'./data.json';
import FilterableProductTable from './components/filterable-product-table-component/filterable-product-table';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList : data.data,
      searchString : "",
      stocked: true,
    } 
  }
  
  
  updateSearchString = (str) => {
     this.setState({
       searchString: str
     });
     console.log(str)
     this.filterList(str);
  }
  updateCheckedValue = (val) => {
    console.log(val)
    this.setState({
      stocked: val
    })
    console.log(val)
    this.filterStocked(val);
  }
  filterStocked = (val) =>{
    if(val){
      let filteredList = data.data.filter((dt) => dt.stocked === val); 
      this.setState({
        dataList: filteredList
      }) 
    } else {
      this.setState({
        dataList: data.data
      }) 
      console.log(this.state.dataList)
    }
    
  }
  filterList = (sStr) => {
    console.log(sStr)
    let filteredList = data.data.filter((dt) => dt.name.toLowerCase().includes(sStr.toLowerCase()));
    console.log(filteredList)
    this.setState({
      dataList: filteredList
    })
  }
  
  render() {
    
    return (
      <div className="main-content">
         <header>
           <h1>IRONSTORE</h1>
         </header>
         <div className="table-content">
            <FilterableProductTable products={ this.state.dataList } 
                                    searchString={this.state.searchString} 
                                    updateSearchString = {this.updateSearchString}
                                    stocked = {this.state.stocked}
                                    updateCheckedValue = {this.updateCheckedValue}
                                    
                                    />
         </div>
      </div>
    )
  }
}
