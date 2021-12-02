
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
            state={
                products:this.props.products
            }
 
    filterProducts = (text) => {
        const newArr = this.props.products.filter((products) => {

            return products.name.toLowerCase().includes(text.toLowerCase());
        });

        this.setState({
            products: newArr,
        });
    };
    render() {
        return (
            <div className="App">
                
                <SearchBar filterProducts={this.filterProducts}/>
    
                <ProductTable products={this.state.products}/>
              
    
            </div>

);
}
}

export default FilterableProductTable;