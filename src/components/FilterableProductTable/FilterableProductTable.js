import React, { Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable'

class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>IronStore</h1>

                <SearchBar />

                <ProductTable products={this.state.products}/>

            </>
        )
    }
}

export default FilterableProductTable