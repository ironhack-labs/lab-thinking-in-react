import React, { Component } from 'react'

export default class ProductRow extends Component {

    

    render() {
        const { name, price } = this.props.product;
        // console.log(this.props.products);
        return (
            <>
                <td>
                    {name}
                </td>
                <td>
                    {price}
                </td>
            </>
        )
    }
}
