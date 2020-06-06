import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    state = {
        products: this.props.products,
    }


    render() {

        return(
            <div className="column">
            {this.props.products.filter((p) => p.name.includes(this.props.searchTerm)).map((p) => <ProductRow name={p.name} price={p.price} stocked={p.stocked} key={Math.random()}></ProductRow> )}  
            </div>
        )
    }
}

export default ProductTable;