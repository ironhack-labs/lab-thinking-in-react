import React, {Component} from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterableProductTable extends Component {
    state = {
        CurrentProducts: []
    }


    componentDidMount() {
        this.setState({ CurrentProducts: this.props.products });
    }
 
 
    handleSearch = evt => {

         const filteredProds = this.props.products.filter(prod => prod.name.toUpperCase().includes(evt.target.value.toUpperCase()));
         this.setState({ CurrentProducts: filteredProds }) }

    render() { 
    return (
        <div>
            <SearchBar clbk={this.handleSearch}></SearchBar>
            <ProductTable products={this.state.CurrentProducts}></ProductTable>
        
        </div>
    )
}}