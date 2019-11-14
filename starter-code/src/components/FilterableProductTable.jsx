import React, { Component } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [...this.props.products.data],
            filteredProducts: [...this.props.products.data],
        }
    }


    filterList = (searchString, inStock) => {
        let fullList = [...this.state.products];
        let filteredList = fullList.filter(product => {
            if (!inStock){
                return product.name.toLowerCase().includes(searchString.toLowerCase())
            } else {
                return product.name.toLowerCase().includes(searchString.toLowerCase()) && (product.stocked === inStock)
            }
         } );
        this.setState({
          filteredProducts: filteredList,
        })
      }
    
    render() {
        return (
            
            <div className="main-div">
                <h1>IronStore</h1>
                <SearchBar filterFunction={this.filterList}/>
                <ProductTable products={this.state.filteredProducts}/>
            </div>
        )
    }
}
