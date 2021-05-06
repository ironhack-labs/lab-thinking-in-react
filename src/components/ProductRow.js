import React, { Component } from 'react'

export default class ProductRow extends Component {

    render() {
        console.log('These are the props of ProductRow: ', this.props)
        const allProducts = this.props.products.data.filter(product => {
            return (
                product.name.toLowerCase().includes(this.props.search.toLowerCase())
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
