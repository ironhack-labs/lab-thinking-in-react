import React, { Component } from 'react'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    renderProducts() {
        return this.props.productsArr.map(productObj => {
            return (
                <ProductRow
                    key={productObj.id}
                    {...productObj}
                />
            )
        })
    }

    render() {
        return (
            <main>
                <div className="header">
                    <div className="column">Name</div>
                    <div className="column">Price</div>
                </div>
                <section className="movie-container">
                    {
                        this.props.productsArr.length
                        ? this.renderProducts()
                        : <p className="msg-info">There are currently no products to display</p>        
                    }
                </section>
            </main>
        )
    }
}
