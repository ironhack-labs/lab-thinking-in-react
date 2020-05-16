import React from 'react';
import { SearchBar, ProductTable } from '../../molecules';

class FilterableProductTable extends React.Component {
    state = {
        filteredProducts: this.props.products
    }

    render() {
        return (
            <div>
                {console.log(this.state.filteredProducts)}
                <SearchBar searchMethod={this.filterProducts} filterMethod={this.filterOnStock} />
                <ProductTable products={this.state.filteredProducts} />
            </div >
        );
    }

    filterProducts = (name) => {
        const filteredProducts = { data: this.props.products.data.filter(e => e.name.includes(name)) };
        this.setState({ filteredProducts });
    }

    filterOnStock = (checked) => {
        if (checked) {
            const filteredProducts = { data: this.state.filteredProducts.data.filter(e => e.stocked) };
            this.setState({ filteredProducts });
        } else {
            this.setState({ filteredProducts: this.props.products });
        }
    }
}

export default FilterableProductTable;