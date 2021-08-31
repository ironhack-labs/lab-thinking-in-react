import React from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    state={
        products: this.props.products
    }

    render(){

        return(
            <div>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductRow products={this.state.products}/>



                
            </div>
            
            
        )
    }
}