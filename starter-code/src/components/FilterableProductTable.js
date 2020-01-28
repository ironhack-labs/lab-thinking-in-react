import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    state = {
        searchValue: "",
        showJustStocked: false
    }

    searchHandler = (searchResult) => {
        this.setState({ searchValue: searchResult })
    }

    stockedHandler = (stockedResult) => {
        this.setState({ showJustStocked: stockedResult })
    }

    render() {
        let filteredProducts = this.props.products.filter(product => {
            if (this.state.showJustStocked === false) {
                return product;
            }
            else {
                if (product.stocked === true) {
                    return product
                }
            }
        }).filter(searchProduct => {
            if (this.state.searchValue === "") {
                return searchProduct;
            }
            else if (searchProduct.name.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
                return searchProduct;
            }
        })

        return (
            <div>
                <SearchBar searchValue={this.state.searchValue} searchHandler={this.searchHandler} stockedHandler={this.stockedHandler}/>
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}
