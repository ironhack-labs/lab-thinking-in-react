import React, { Component } from 'react';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';
import ProductRow from '../productrow/ProductRow';

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList: this.props.products.slice(0),
            filteredList: this.props.products.slice(0)
        }
    }

    searchHandler = (filteredProductList) => {
        this.setState({
            filteredList: filteredProductList,
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
                products={this.state.productList}
                filteredProducts={this.state.filteredProductList}
                />
                <ProductTable products={this.state.filteredList} />
            </div>
        )
    }
}
