import React, { Component } from 'react'
import ProductRow from './ProductRow.js';

export default class ProductTable extends Component {

    render() {
        //console.log( this.props.products );
        return (
            
            <div className="producttable">
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(oneProduct => {
                            return <ProductRow key={oneProduct.id} {...oneProduct} />  
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
