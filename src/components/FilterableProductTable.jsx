import React, { Component } from 'react'

import ProductTable from './ProductTable';
import  SearchBar from './SearchBar.jsx';


class FilterableProductTable extends Component {
   
    state = {
        products: this.props.products,
        value: "",
    }


    handleSearch =(valueSearch) => {
    const filteredProducts = this.props.products.filter(product => product.name.toLowerCase().includes(valueSearch.toLowerCase()))
    this.setState({
       products: filteredProducts
     });
    }

    render() {
      
        return (
            <div>
                <h1>IronStore</h1>
   
                {/* <SearchBar valueInput={this.state.value} handleSearch={this.handleSearch}  products={this.state.products}/> */}
                <SearchBar handleSearch={this.handleSearch}/>
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}


export default  FilterableProductTable;