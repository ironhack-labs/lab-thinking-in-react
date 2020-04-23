import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(searchTerm) {
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

