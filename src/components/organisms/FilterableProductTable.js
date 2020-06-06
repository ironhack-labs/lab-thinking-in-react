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

class FilterableProductTable extends React.Component {

    state = {
        dataArr: productDataObject.data,
        searchTerm: ""
    }

    searchHandler = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    render() {

        let filteredProducts = this.state.dataArr.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm))

        return (
            <div className="mb-3">
                <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}

export default FilterableProductTable;