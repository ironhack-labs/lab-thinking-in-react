import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    render() {
        return(
            <div>
                <SearchBar />
                <ProductTable products={this.props.data} />
            </div>
        )
    }
}

export default FilterableProductTable;

