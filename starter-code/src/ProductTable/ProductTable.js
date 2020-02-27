import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';



export default class ProductTable extends Component {


    // constructor() {
    //     super()
   
    

    

    render() {
     
        return (
            <div className="total">
                <ul>

                    {this.props.products.map((product, idx) => (
                        <ProductRow
                            key={idx}
                            name={product.name}
                            price={product.price}
                            stocked={product.stocked}
                        />
                    ))}
                </ul>


            </div>
        );
    }
}