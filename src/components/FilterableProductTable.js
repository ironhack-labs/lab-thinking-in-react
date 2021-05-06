import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    state = {
        search: ''
    }
    handleChange = event => {
        const value = event.target.value;
        this.setState({
          search: value
        })
    }
    render() {
        return (
            <div>
                <SearchBar handleChange={this.handleChange} />
                <ProductTable products={this.props.products} search={this.state.search}/>
            </div>
        )
    }
}
