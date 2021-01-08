import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends React.Component {

    state = {
        searchTerm: ""
    }

    handleSearchTerm = (newTerm) => {
        this.setState({ searchTerm: newTerm });
    }

    dynamicSearch = () => {
        return this.props.products.filter(product => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
      }


    render() {
        return (
            <div className="FilterableTable">
                <h1>IronStore</h1>
                <SearchBar value={this.state.searchTerm} onChange={this.handleSearchTerm} />
                {/* props passing data down */}
                {/* <ProductTable products={this.props.products} /> */}
                <ProductTable products={this.dynamicSearch()} />
            </div>
        );
    }
}

export default FilterableProductTable;