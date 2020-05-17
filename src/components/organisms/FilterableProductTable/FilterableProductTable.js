import React from 'react';
import { SearchBar, ProductTable } from '../../molecules';

class FilterableProductTable extends React.Component {
    state = {
        filteredProducts: this.props.products
    }

    render() {
        return (
            <div>
                <SearchBar searchMethod={this.filterProducts} />
                <ProductTable products={this.state.filteredProducts} />
            </div >
        );
    }

    filterProducts = (name, filterInStock) => {
        let filteredProducts;
        if (filterInStock) {
            filteredProducts = { data: this.props.products.data.filter(e => e.name.includes(name) && e.stocked) };
        } else {
            filteredProducts = { data: this.props.products.data.filter(e => e.name.includes(name)) };
        }

        this.setState({ filteredProducts });
    }
}

export default FilterableProductTable;