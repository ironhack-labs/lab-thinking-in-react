import React, {Component} from 'react'
import ProductRow from './ProductRow'
import data from "../data.json"


class ProductTable extends Component{
    constructor(props){
        super(props)
        this.state= {
            data:data.data
        }
        
    }
    render () {
        return (
            <>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                
                    { this.props.data.map((elm,idx) => <ProductRow {...elm} key={idx}/>) }
            </tbody>
        </table>
        </>
        )
    }
}

export default ProductTable