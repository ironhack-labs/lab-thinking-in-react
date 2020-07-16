import React, {Component} from 'react';
// import Data from './../../../../data.json'

class ProductRow extends Component {
    render() {
        return (
           
            <>
                <tr>
                    <td>
                        {this.props.category}
                    </td>
                    <td>
                        {this.props.price}
                    </td>
                    <td>
                        {this.props.stocked}
                    </td>
                    <td>
                        {this.props.name}
                    </td>
                </tr>
            </>
        )
   }
   
}



export default ProductRow; 

