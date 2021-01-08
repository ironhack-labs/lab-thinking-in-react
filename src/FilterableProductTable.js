import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends React.Component {

    render() {
        return (
            <div className="FilterableTable">
                <h1>IronStore</h1>
                <SearchBar />
                {/* props passing data down */}
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable;