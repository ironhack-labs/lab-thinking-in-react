import React, { Component } from 'react'
import ProductRow from './ProductRow'
import '../styles/ProducTable.css'

export class ProductTable extends Component {
    
    render() {
        const {allItems, searchValue } = this.props
        const filteredProduct = allItems.filter(item => item.name.match(new RegExp ("^" + searchValue, "i")))
        console.log(filteredProduct);

        return (
            <div className="ProducTable">
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>    
                    </thead>
                    <tbody>
                        {filteredProduct.map(product =>
                            <ProductRow key={product.id} item={product} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable
