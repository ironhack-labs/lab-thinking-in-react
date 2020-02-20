import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {

    render() {

        return (
            <div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.productsDisplay.map((product,i) => (
                            <ProductRow
                            key={i}
                            category={product.category}
                            price={product.price}
                            stocked={product.stocked}
                            color={product.stocked? "red":""}
                            name={product.name}
                            />
                            ))}
                        </tbody>
            </table>

                
            </div>
        )
    }
}
