import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const filteredList = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(this.props.query.toLowerCase())
        })

        const tableRow = filteredList.map(product => {
            return (
                <tr>
                    {product.stocked ? <td>{product.name}</td> : <td style={{color: "red"}}>{product.name}</td>}
                    {product.stocked ? <td>{product.price}</td> : <td style={{color: "red"}}>{product.price}</td>}
                </tr>
            )
        })
        return (
            <tbody>
                {tableRow}
            </tbody>
        )
    }
}