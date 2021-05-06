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

      

        const value = event.type === 'checkbox' ? event.checked : event.value;

        const name = event.name
        this.setState({
            [name]: value,
            filter: filtered
        })
        var filtered = this.props.products.filter((product)=>{
            return product.name.toLowerCase().includes(event.value) && product.stocked === event.checked
        })
        this.setState({
            filter : filtered
        })
    }

    checkHandler = (event)=>{
        console.log(event)
        this.setState({
            inStock : event
        })
    }
    
  state = {
    search: "",
    filter: this.props.products,
    stocked: false
    // data: this.props.products,
  };
  render() {
    return (
      <div className="FilterableProductTable">
        <p>hello</p>
        <SearchBar search={this.state.search} inStock={this.state.stocked} submitHandler={this.submitHandler} changeHandler={this.changeHandler} checkHandler={this.checkHandler}/>
        <ProductTable products={this.state.filter}  />
      </div>
    );
  }
}
