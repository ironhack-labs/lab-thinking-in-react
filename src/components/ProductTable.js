import React, {Component} from 'react'
import Row from './ProductRow'
class ProductTable extends Component {
    constructor (props){
        super (props)
        this.state = {
        
        }
    }


    render () {
        
        return (
            <>
            
       <table>
       <tbody>
       <tr>
       <th>Name</th>
       <th>Price</th>
        </tr>
       {this.props.product.map((elm, idx)=>  <Row {...elm} key={idx} /> )}
       </tbody>
       </table>
   
          </>

        )
    }
}

export default ProductTable