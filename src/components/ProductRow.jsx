import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {

        // console.log("product row is called", this.props)

        const { name, price, stocked } = this.props

        let thStyle = {
            color: stocked ? "black" : "red"
        }

        return (

            <tr className="ProductRow">

                <td style={thStyle}>{name}</td>
                <td>{price}</td>

            </tr>
        )
    }
}
