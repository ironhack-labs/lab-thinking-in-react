import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {

state ={}

    render() {

        console.log(this.props.products, "toto");

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
                    
                    {this.props.products.map((product, index) => (
                        <ProductRow productRow={product} key={index}/>
                    ))}


                        {/* <ProductRow product={this.props.products.name}/> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default  ProductTable;