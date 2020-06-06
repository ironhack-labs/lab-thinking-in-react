import React from 'react';

// importing data
import productDataObject from '../../data.json'

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// importing sub components
import ProductTable from '../molecules/ProductTable';
import SearchBar from '../molecules/SearchBar';
import CheckBoxStock from '../molecules/CheckBoxStock';

class FilterableProductTable extends React.Component {

    state = {
        dataArr: productDataObject.data,
        searchTerm: "",
        inStock: false
    }

    searchHandler = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    stockHandler = (inputStocked) => {
        //console.log("inputStocked: " + inputStocked)
        this.setState({
            inStock: inputStocked
        })
    }

    render() {

        let filteredProducts = this.state.dataArr.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm))

        // TODO: filter for true or false -> put stockProducts into <ProductTable>
        /* let stockProducts = this.state.dataArr.filter((product) => product.stocked(this.state.inStock)) */

        return (
            <div className="mb-3">
                <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>
                <CheckBoxStock onStockCallback={this.stockHandler} currentStock={this.state.inStock}></CheckBoxStock>
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}

export default FilterableProductTable;