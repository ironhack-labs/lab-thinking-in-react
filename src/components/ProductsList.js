import React from 'react'
import { Component } from 'react'
import products from './data.json'

class ProductsList extends Component {

    constructor() {
        super()
        this.state = {
            filterList: products.data,
            products: products.data,
            productName: ''
        }
    }

    handleInputChange(e) {
        const value = e.target.value
        const result = this.state.filterList.filter(elm => elm.name.includes(value))
        this.setState({ products: result, productName: value })
    }

    render() {

        return (

            <>

                <div>
                    <label>
                        Search <input type='text' name='productName' value={this.state.productName} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Only show products on Stock <input type='checkbox' onChange={() => this.handleCheckBoxChange()} />
                    </label>
                </div>

                <h3>Name</h3>

                <h3>Price</h3>
                <section>

                    {
                        this.state.products?.map((elm, idx) =>
                            <div key={idx}>
                                <div>
                                    <div>
                                        <div>
                                            <p>{elm.name}</p>
                                        </div>
                                        <div>
                                            <p>{elm.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </>
        )
    }
}

export default ProductsList