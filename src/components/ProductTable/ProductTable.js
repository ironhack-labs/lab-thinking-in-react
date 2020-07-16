import React, { Component } from 'react'
import data from './../../data.json'
import ProductRow from './../ProductRow/ProductRow'

class ProductTable extends Component {

    constructor() {
        super()
        this.state = {
            dataJason: data
        }
    }

    

    render() {

        const { dataJason } = this.state

        return (
            <>
                <div>

                    {dataJason.data.map((elm) =>  <ProductRow {...elm} /> )}
                    
                </div>
            </>

        )
    }
}

export default ProductTable


