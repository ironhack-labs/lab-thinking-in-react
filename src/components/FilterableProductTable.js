import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        }
    }
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable;
