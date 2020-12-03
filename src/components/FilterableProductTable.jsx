import React from 'react';
import data from '../data.json'
import ProductTable from "../components/ProductTable"
import SearchBar from "../components/SearchBar"

class FilterableProductTable extends React.Component {
state = {
    table: this.props.products,
    search: "" 
}

handleChange(search) {
    this.setState({
      search: search
    });
    //this.filter() 
  }

filter() {
let newarr = this.state.table.filter(element => {
    element.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return newarr;
}

render() {
    console.log(this.props.products)
   return (<div>  
    <SearchBar search={this.state.search} handleChange={this.handleChange}/>   

    <h1> IronStore </h1>
   <ProductTable products = {this.state.table}/>
   </div>) 
 }
}

export default FilterableProductTable