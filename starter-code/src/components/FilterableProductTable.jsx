import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
 
class FilterableProductTable extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
            filteredList: this.props.products
        }
    }

    filteredlist = (keyword) =>{
        const newList = this.props.products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.target.value.toLowerCase());
        });
        this.setState({filteredList: newList});
    }

    render() {
        return (
            <div>
                <SearchBar filter={this.filteredlist}></SearchBar>
                <ProductTable products={this.state.filteredList}></ProductTable>
            </div>
        );
    }
}

export default FilterableProductTable;