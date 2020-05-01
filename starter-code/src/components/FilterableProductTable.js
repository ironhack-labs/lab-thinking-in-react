import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            stock:false,
            data: this.props.products,
            searchState: ''
        }
        this.searchTool = this.searchTool.bind(this);
        this.stockeCheck = this.stockeCheck.bind(this);
    }

    stockeCheck() {
        this.setState({
            stock: !this.state.stock,
        })
    }
    searchTool(value) {
    // let dataCopy = [...this.state.data]
    //     dataCopy = dataCopy.filter(item => item.name.toLowerCase().includes(value))
    //     console.log(dataCopy)
        this.setState({
            searchState:value,
        })
    }
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar searchTool={this.searchTool} stock={this.stockeCheck}/>
                <ProductTable products={this.state.data} search={this.state.searchState} stock={this.state.stock}/>
            </div>
        )
    }
}

export default FilterableProductTable;

