import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    render() {
        return (
            <div>
                {
                    this.props.products.map((item) => {
                        return <ProductRow product={item} />
                    })
                }
            </div>
        );
    }
}

export default ProductTable;