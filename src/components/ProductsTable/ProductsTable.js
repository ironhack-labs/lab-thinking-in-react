import React, { Component } from 'react'

class ProductsTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.products
        }
    }



    render() {
        return(
            <>
            
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>

          {this.props.products.map((elm) => 
                <tr>
                    {/* <ProductRow />*/}
                    <td> {elm.name} </td>
                    <td> {elm.price} </td>
                </tr>
          )}  
            </table>
            </>
        )
    }
}

export default ProductsTable