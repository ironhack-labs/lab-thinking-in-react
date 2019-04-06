import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import fileData from '../data.json';

// in other words, class FilterableProductTable inherits from Component
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        // never initialize your state with a props, because it will create a conflict of true, overriding state
        this.state = {
            products: fileData.data,
            filterProducts: fileData.data,
            query: '',
            checked: false,
        };
    }

    handleSearch = e => {
        const { filterProducts } = this.state;
        const value = e.target.value;
        this.setState({ query: value });
        const newFilteredProducts = filterProducts.filter(eachProduct =>
          eachProduct.name.includes(value)
        );
        this.setState({ filterProducts: newFilteredProducts });
    };

    handleCheckBox = () => {
        const { checked } = this.state;
    
        this.setState({
          checked: !checked,
        });
      };

    render() {
        const {checked, products, query, filterProducts} = this.state;
        return (
            <div className="FilterProductTable">
                <h1>IronStore</h1>
                {/* send the handleSearch and handleCheckBox to SearchBar like this: */}
                <SearchBar 
                handleSearch={ this.handleSearch } 
                handleCheckBox={ this.handleCheckBox }
                />
                <ProductTable
                checked={checked}
                products={query.length ? filterProducts : products}
                />
            </div>
        );
    }
}

export default FilterableProductTable;