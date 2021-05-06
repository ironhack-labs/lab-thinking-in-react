import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const filtered = this.props.products.filter(product => {
            return  product.name.toLowerCase().includes(this.props.query.toLowerCase())
                    && (this.props.stock ? product.stocked === this.props.stock : true) 
            })

        const product = filtered.map((product, index) => {
            return <tr key={index}>
                {product.stocked ? <td>{product.name}</td> : <td style={{color: 'red'}}>{product.name}</td>}
                <td>{product.price}</td>
            </tr>
        })

        return (
            <>
                {product}
            </>
        )
    }
}
