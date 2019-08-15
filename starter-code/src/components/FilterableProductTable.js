import React, { Component } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import Table from './Table';
import data from '../data.json'

class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state={
            products: data.data,
            allProducts: data.data
        }
    }

    searchItem= products =>{
        const productsCopy = [...this.state.allProducts]
        const filteredArray = productsCopy.filter(elm =>
            elm.name.toLowerCase().includes(products.toLowerCase()))

        this.setState({
            products : filteredArray
        })



        
     }


    render() {
        return (
            <div className="container">
                <div className="row">
                     {/* <input type="text" name="name"  onChange={this.searchItem} placeholder="Search..."/> */}
                </div>
                <div className="row">
                <SearchBar searchItem = {this.searchItem}/>
                <Table/>
                </div>
                <div className="row">
                <div className="col-12 justify-content-center">
                        {this.state.products.map((elm, idx) => {
                            return <ProductItem key={idx} {...elm}/>
                        })
                        }
                </div>
                    
                </div>
            </div>
        )
    }
 }
    export default FilterableProductTable;
 