import React, { Component } from 'react';

import '../App.css';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class filterProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.products.data,
            filteredData: props.products.data
        }

    }

    filterHandler = searchWord => {
        let filteredProducts = this.state.data.filter(product => {
            const productLowerCase = product.name.toLowerCase();
            return productLowerCase.includes(searchWord)
        });
        this.setState({
            filteredData: filteredProducts
        })
    } 

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <div className="searchBar">
                    <SearchBar filterData={this.filterHandler}/>
                    <ProductTable list={this.state.filteredData} />
                </div>
              
                <div className="productRow"></div>
            </div>
        )
    }

}

export default filterProductTable;