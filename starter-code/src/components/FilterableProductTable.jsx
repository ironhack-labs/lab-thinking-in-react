import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component{

    state = {
        fileteredList:this.props.products
    }

    filteredlist = (keyword) =>{
        const newList = this.props.products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.target.value.toLowerCase());
        });
        this.setState({fileteredList: newList});
    }

    render() {
        return (
            <div>
                <SearchBar filter={this.filteredlist}></SearchBar>
                <ProductTable products={this.state.fileteredList}></ProductTable>
            </div>
        );
    }
}