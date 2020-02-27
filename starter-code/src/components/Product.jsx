import React, {Component} from 'react'

class Product extends Component{

    render(){
        return(
            <tr>
                <th>{this.props.name}</th>
                <th>{this.props.price}</th>
            </tr>
     )
    }
}
export default Product