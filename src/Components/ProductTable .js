import React, { Component } from 'react'

export default class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
            id: '',
            category: '',
            price: '',
            name: '',
            stocked: false


        }
    }
    render() {

        return (
            <div>
                {this.state.products.map(eachProducts => (
                    <article>
                        <div >
                            <p>{eachProducts.name}</p>
                            <p>{eachProducts.price}</p>
                        </div>
                    </article >
                ))
                }
            </div>
        )
    }
}
