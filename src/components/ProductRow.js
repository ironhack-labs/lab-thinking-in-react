import React, { Component } from 'react'

export default class ProductRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: props
        }
    }


    render() {
        return (
            <div className="products-row">
                <div >
                    {this.state.product.name}
                </div>
                <div>
                    {this.state.product.price}
                </div>
            </div>
        )
    }
}
