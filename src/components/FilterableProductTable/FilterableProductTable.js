
import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';





export default class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
        }
    }

    

    filterResult = (name) => {
        this.setState(
         { products: this.props.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))}
        )
      }

    render() {
        return (
            
        <div>
        <SearchBar filter={this.filterResult}/>
            <ProductTable products={this.state.products}/>
        </div>
        )
    }     
}
