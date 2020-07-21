import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    render() {
        const tableRows = this.props.products.data
                                                .filter(product => this.props.state.filteredStocked ? product.stocked : true)
                                                .filter(product => product.name.toLowerCase().includes(this.props.state.searchBar))
                                                .map(product => <ProductRow key={product.name} {...product} />)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        )
    }
}

export default ProductTable
