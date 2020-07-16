import React, { Component } from 'react';
import data from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    state = {
        products: data.data,
        filteredProduct: data.data,
        inStock:data.data,
        rendered: data.data
    }

    filterProductHandler = (query) => {
        const filteredByName = this.state.products.filter(product =>product.name.toLowerCase().includes(query.toLowerCase()));
        this.setState({ rendered: filteredByName });
    };

    inStockHandler = (productsInStock) => {
        let query= document.getElementById("checkIt").value;
        const filtered = this.state.products.filter(product =>product.name.toLowerCase().includes(query.toLowerCase()));
        const stockedTrue = this.state.rendered.filter(product =>product.stocked === productsInStock);
        if(productsInStock){
            this.setState({ rendered: stockedTrue });
        }else {
            if(query.length>0){this.setState({ rendered:filtered }) }
            else{this.setState({ rendered:data.data })}
        }
        
    }
    render() {
        return (
            <div>
                <SearchBar stockProducts={this.inStockHandler} filterProducts={this.filterProductHandler}/>
                <ProductTable rendered={this.state.rendered} />
            </div>
        )
    }
}