import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    submitHandler = (event) =>{
        event.preventDefault();
        console.log('submit handler')
       
    }

    changeHandler = (event)=>{
        // console.log('change handler',event)
        
        var filtered = this.props.products.filter((product)=>{
            return product.name.toLowerCase().includes(event)
        })
        this.setState({
            search: event,
            filter: filtered
        })
        console.log(filtered)
    }
    
  state = {
    search: "",
    filter: this.props.products,
    // data: this.props.products,
  };
  render() {
    return (
      <div className="FilterableProductTable">
        <p>hello</p>
        <SearchBar search={this.state.search} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
        <ProductTable products={this.state.filter}  />
      </div>
    );
  }
}
