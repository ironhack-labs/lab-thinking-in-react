import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {
    state = {
        searchValue: "",
        checked : false,
    }

    handleSearch = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    handleCheckbox = (event) => {
        this.setState({checked: event.target.checked})
    }

    render() {
        const filterProduct = this.props.products
        .filter((product) => {
            return product.name.includes(this.state.searchValue);
          })
        .filter((product) => {
            if(this.state.checked === true){
               return product.stocked === true
            }else{
                return product
            }
        })

        return (
            <div className="container">
                <h1>IronStore</h1>
                <SearchBar callback={this.handleSearch} callback2={this.handleCheckbox} />
                <ProductTable products={filterProduct} />
            </div>

        )
    }
}

export default FilterableProductTable
