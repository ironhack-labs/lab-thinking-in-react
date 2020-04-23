import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        searchTerm: ''
    }

    handleSearch = (searchTerm) => {
        this.setState({ searchTerm: searchTerm })
    }

    render() {
        return(
            <div>
                <SearchBar searchTerm={this.state.searchTerm} onSearch={this.handleSearch} />
                <ProductTable products={this.props.products} searchTerm={this.state.searchTerm} />
            </div>
        )
    }
}

export default FilterableProductTable;

