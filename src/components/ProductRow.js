import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const filtered = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(this.props.search.toLowerCase())
        })

        const list = filtered.map((product, index) => {
            return (
                <tr key={index} style={ { color: product.stocked ? 'black' : 'red' }}>
                    <td className="tg-0pky">{product.name}</td>
                    <td className="tg-0pky">{product.price}</td>
                </tr>
            )
        })
        return (
            <>
                {list}
            </>
        )
    }
}
