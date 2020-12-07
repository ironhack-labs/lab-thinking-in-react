import React, { Component } from 'react';
import ProductRow from './ProductRow';


class ProductTable extends Component {
    render({data} = this.props) {
        let productRowArr = [];
        for(let product of data){
            productRowArr.push(<ProductRow name={product.name} price={product.price} inStock={product.stocked}></ProductRow>)
        }
        return (
            <div>
                <div className="row bg-grey">
                    <span className="bold">Name</span>
                    <span className="bold">Price</span>
                </div>
                {productRowArr}
            </div>
        );
    }
}

export default ProductTable;