import React, { Component } from 'react';
import './FilteredProductTable.css';
import SearchBar from '../searchBar/SearchBar';
import ProductTable from '../productTable/ProductTable';

export default class FilterableProductTable extends Component {
    state= {
        products: this.props.products,
        searchParams: '',
        filtered: [],
    };

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        this.handleFilter()
            };
    
    handleFilter = () => {
        const copyProducts = [...this.state.products.data];
        const filteredArray = copyProducts.filter((element) => 
        element.name.toLowerCase().includes(this.state.searchParams.toLowerCase()));
        this.setState({
            filtered: filteredArray,
        });
    };

    render() {
        return (
            <div className="filterable">
               <h1>IronStore</h1>
               <div className="field">
               <SearchBar products={this.state.products} onChange={this.onChangeHandler}/>
               </div>
               <ProductTable products={this.state.products} filtered={this.state.filtered}/> 
            </div>
        );
    };
}
