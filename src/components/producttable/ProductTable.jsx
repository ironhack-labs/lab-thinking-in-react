import React, { Component } from 'react'
import ProductRow from '../productrow/ProductRow'

export default class ProductTable extends Component {


    render() {
  
      
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    <ProductRow products = {this.props.products}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
