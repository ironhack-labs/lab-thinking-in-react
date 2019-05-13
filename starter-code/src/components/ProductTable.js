import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

    render() {
        return (
            <table className='table'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </tbody>
                {
                    this.props.products.map((e, i) => {
                        return (
                            (e.name.includes(this.props.product)) ? 
                            <ProductRow key={i} {...e} />
                            :
                            <ProductRow key={i} {...0} />
                        )
                })
            }
            </table>
        )
    }
}
