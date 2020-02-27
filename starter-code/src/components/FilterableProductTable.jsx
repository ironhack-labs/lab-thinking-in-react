import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
        productsOriginal: this.props.products
    }

    searchProduct = value => {
    // const productsCopy = [...this.state.products]
    const productsOriginal = [...this.state.productsOriginal]
    let newList = []
    console.log(value)
      newList = productsOriginal.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = value.toLowerCase();
        console.log(lc)
        return lc.includes(filter);
      })
    console.log(newList) 
      this.setState({ products: newList })
    }


    render() {
        return (
            
            <div>
                <h1>IronStore</h1>
                <SearchBar searchProduct={(value) => this.searchProduct(value)}></SearchBar>
                <ProductTable products={this.state.products}></ProductTable>
                
            </div>
        );
    }
    }

export default FilterableProductTable;