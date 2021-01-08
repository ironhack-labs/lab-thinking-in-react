import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends React.Component {

    state = {
        searchTerm: "",
        // is the checkbox active (clicked) or not
        filterInStockActive: false
    }

    handleSearchTerm = (newTerm) => {
        this.setState({ searchTerm: newTerm });
    }

    handleCheckBox = (event) => {
        this.setState({ filterInStockActive: event.currentTarget.checked });
    }

    dynamicSearch = () => {
        return this.props.products
            // if the filterInStockActive is false, then show all products OR (if it is true) show only stocked products
            .filter(product => !this.state.filterInStockActive || product.stocked)
            .filter(product => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }


    render() {
        return (
            <div className="FilterableTable">
                <h1>IronStore</h1>
                <SearchBar value={this.state.searchTerm} filterInStockActive={this.state.filterInStockActive} onChange={this.handleSearchTerm} checkBoxChange={this.handleCheckBox} />
                {/* props passing data down */}
                {/* <ProductTable products={this.props.products} /> */}
                <ProductTable products={this.dynamicSearch()} />
            </div>
        );
    }
}

export default FilterableProductTable;