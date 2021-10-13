import React, { Component } from 'react';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';
import ProductRow from '../productrow/ProductRow';

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList: this.props.products.slice(0),
            filteredList: this.props.products.slice(0),
            inStockList: []
        }
    }

    searchHandler = (filteredProductList) => {
        this.setState({
            filteredList: filteredProductList,
            inStockList: this.state.inStockList,
        })
    }

    inStockHandler = (inStockProducts) => {
        this.setState({
            filteredList: this.state.filteredList,
            inStockList: inStockProducts,
        })
    }

    render() {
        const products = this.props.products;
        // console.log(products);
        return (
            <div>
                <h1>
                    <b>IronStore</b>
                </h1>
                <SearchBar 
                onChangeSearchHandler={this.searchHandler} 
                inStockHandler={this.inStockHandler}
                products={this.state.productList}
                filteredProducts={this.state.filteredProductList}
                />
                <ProductTable products={this.state.filteredList} />
            </div>
        )
    }
}
