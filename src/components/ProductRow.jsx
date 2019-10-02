import React, { Component } from 'react'
import '../general.css'
import './ProductRow.css'

class ProductRow extends Component {
    render() {
        return <div className="product-row-div flex jcsb">
            <span className={this.props.data.stocked ? "" : "out-of-stock"}>{this.props.data.name}</span>
            <span>{this.props.data.price}</span>
        </div>
    }
}

export default ProductRow
