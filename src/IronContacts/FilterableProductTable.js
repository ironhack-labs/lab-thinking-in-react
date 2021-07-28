import React, { Component } from 'react';
import ProductTable from './ProductTable';
import '../App.css'

class FilterableProductTable extends Component {

   

    render() {
        return (
            <>
                <p className="h1-principal"> IronStore </p>
                <ProductTable myList={this.props.myList} />
            </>

        )
    }
}

export default FilterableProductTable