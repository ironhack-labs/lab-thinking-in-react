import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {

    render() {
        //console.log("this.props in ProductTable:", this.props.products.data)

        
        const filteredArray = this.props.products.data.filter(ele => {
            return ele.name.toLowerCase().includes(this.props.filter.toLowerCase())
        })

        const rows = filteredArray.map((ele, i) => {
            return (
                <ProductRow key={i} product={ele} />
            )
        })



        return (
            <div className="productTable">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
