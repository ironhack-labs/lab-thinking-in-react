import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products.data,
            searchInput: ""
        }
    }

    handleSearch = (event) => {               
        this.setState({
            searchInput: event.target.value
        });
    }

     render() {
        //console.log(this.state.products)
        //console.log(this.state.searchInput)        
        
        return (
            <div>
                {/* leeren searchInput aus state & Methode handleSearch der Komponente SearchBar übergeben.
                handleSearchMethod wird bei Eingabe unter search aufgerufen (siehe SearchBar.js) und setzt state auf den aktuellen searchInput*/}
                <SearchBar searchInputData= {this.state.searchInput} handleSearchMethod={this.handleSearch}/> 
                <ProductTable productArray = {this.state.products} searchInputData= {this.state.searchInput}/>
                               
            </div>
        )
    }
}

export default FilterableProductTable;