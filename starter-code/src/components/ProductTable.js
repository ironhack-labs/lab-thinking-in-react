import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='component'>
                {this.props.products.map((product, idx) => {
                    return <ProductRow key={idx} {...product}/>
                })}
            </div>
        )
    }
}
