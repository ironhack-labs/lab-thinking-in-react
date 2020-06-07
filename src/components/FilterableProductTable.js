import React, { Component } from 'react';
import ProductTable from './ProductTable.js'
import SearchBar from './SearchBar.js'




class FilterableProductTable extends Component{

    state = {
        searchTerm : "",
        products : this.props.products.data,
        filterByStock : false
    }

    searchHandler = (search) => {
        this.setState({
            searchTerm : search
        })
    }

    filterByStockHandler = (checked) => {
        this.setState({
            filterByStock : checked
        })
    }

    render () {
        let filtered=[]
        if(this.state.filterByStock == true)
        {
            filtered = this.state.products.filter ((prod) => prod.stocked == true)
        }
        else
        {
            filtered = this.state.products
        }
        filtered = filtered.filter ((prod) => prod.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return(
            <div>
                IronStore
                <SearchBar onSearchCallBack={this.searchHandler} currentSearchTerm={this.state.searchTerm} onCheckedCallBack={this.filterByStockHandler} />
                <ProductTable products={filtered} currentSearchTerm={this.state}/>
            </div>
        )
    }
}









export default FilterableProductTable