import React, { Component } from 'react'

export default class ProductRow extends Component {

    render() {
        const allProducts = this.props.products.data.filter(product => {
            return (
                product.name.toLowerCase().includes(this.props.search.search.toLowerCase())
                && (this.props.search.stocked === true? product.stocked === true : false)
            )
        })

        const products = allProducts.map(product =>{
            return(
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        });

        return (
            <>
                {products}
            </>
        )
    }
}
