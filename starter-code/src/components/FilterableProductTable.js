import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

 class FilterableProductTable extends Component {

    constructor(props){
        super(props)
        this.state = {data: props.products}

    }

    updateState = (listProducts) =>{ this.setState({...this.state, data: listProducts }) }
    render() {
      //console.log(this.state.data)
    return (
        <div>
            <SearchBar products = {this.state.data} updateState = {this.updateState} />
            <ProductTable products = {this.state.data} updateState = {this.updateState}/>
        </div>
    )
  }
}

export default FilterableProductTable