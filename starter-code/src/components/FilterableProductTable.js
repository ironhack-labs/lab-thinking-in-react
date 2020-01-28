import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class FilterableProductTable extends Component {
    state = {
        search: "",
        stocked: false
    }

    searchHandle = (searchString) => {
        this.setState({
            search: searchString
        })
    }

    stockedHandle = (isStocked) => {
        this.setState({
            stocked: isStocked
        })
    }

    render() {
        //console.log(this.state.stocked);
        let filteredProducts=this.props.products.filter(oneProduct => {
            if (this.state.search === ""){
                return oneProduct;
            }
            else{
                if (oneProduct.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return oneProduct;
                }
            }
        }).filter(stockedProduct => {
            if (this.state.stocked === false){
                return stockedProduct;
            }
            else{
                if (stockedProduct.stocked === true) {
                    return stockedProduct;
                }
            }
        })
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar searchHandle={this.searchHandle} stockedHandle={this.stockedHandle} />
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}


