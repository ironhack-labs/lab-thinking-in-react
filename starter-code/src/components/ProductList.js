import React, { Component } from 'react'
import Product from './Product'
import { stringLiteral } from '@babel/types'

class ProductList extends Component {


    render() {
        // console.log(this.props.data)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h4>Name</h4>

                    </div>
                    <div className='col-md-5'>

                        <h4>Price</h4>

                    </div>

                </div>

                {this.props.data.map((props, idx) => {
                    return (
                        
                        <Product key={idx} data={props} />
                    )
                })}


            </div>

        )

    }
}
export default ProductList