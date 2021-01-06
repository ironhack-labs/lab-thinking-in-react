import React, { Component } from 'react'
import ProductRow from './ProductRow'


export default class ProductTable extends Component {
    render() {

        // console.log("product table is called", this.props.products)

        return (
            <div className="ProductTable">
                <table>

                    <tbody>

                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>


                        {/* <ProductRow {...this.props.products.data} /> */}
                        {/* this is for testing the props */}

                        {this.props.products.map((arr) => (<ProductRow name={arr.name} price={arr.price} stocked={arr.stocked} key={arr.id} />)
                        )}



                    </tbody>
                </table>

            </div>
        )
    }
}
