import React, { Component } from 'react'
import ProductTable from '../productTable/ProducTable'

class FilterableProductTable extends Component {

    constructor(props) {
        super()
        this.state = {
            data: props
        }
    }


    render() {
        
        return (
            <>
                <h1>IronStore</h1>
                <ProductTable product={this.state.data}/>
            </>
        )
    }
}


export default FilterableProductTable

