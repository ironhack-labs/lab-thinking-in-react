import React from 'react';

import Searchbar from '../SearchBar';
import ProductTable from '../ProductTable';


const data = require('../../data.json');
const products = data.data.map((product) => product);



class FilterableProductTable extends React.Component {
    
    state = {
        products: products
    };

    render () {
        
        return (
            <div className="filterable-product-table">
                <h1>Iron Store</h1>
                <Searchbar />
                <ProductTable products={this.state.products}/>

            </div>
        )
    }
}

export default FilterableProductTable;