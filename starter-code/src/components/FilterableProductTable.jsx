import React, {  Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    state = { searchInput: ''};


    searchHandler = (event) => {
        this.setState(
            {searchInput: event.target.value}
        ); 
    };
    render() {
        return(
            <div>
                <SearchBar searchHandler={this.SearchHandler}/>
                <ProductTable product={this.props.products} searchValue={this.state.searchInput} />
            </div>
        )
    }
}

export default FilterableProductTable