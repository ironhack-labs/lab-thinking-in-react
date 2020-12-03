import React, {Component} from 'react';

import ProductRow from './../productRow/ProductRow';
import data from './../../data.json'

class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.found
        }
        
        }
    


    render() {


        return (

            <>
          <table>
          <tr>
          <th>Name</th>
          <th>Price</th>

          </tr>
         
         {this.props.found ? this.props.found.map(elm => <ProductRow key={elm._id} {...elm}  />) : console.log('hola') }
               
          </table>
            </>
        )
    }
}

export default ProductTable
