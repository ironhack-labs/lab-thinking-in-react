import React, { Component } from 'react'
import ProductRow from "./ProductRow"
import '../general.css'
import './ProductTable.css'

class ProductTable extends Component {
    buildTable = () => {
        return this.props.products.map((p, i) => <ProductRow key={i} data={p} />)
    }

    render() {
        return (
            <div className="product-table">
                <div className="table-column-headers flex jcsb">
                    <span>Name</span>
                    <span>Price</span>
                </div>
                <div className="table-rows">
                    {this.buildTable()}
                </div>
            </div>
        )
    }
}

export default ProductTable
