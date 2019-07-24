import React, { Component } from 'react';


class ProductRaw extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }





    render() {
        return (


            <tr>
                <td>{this.props.theName}</td>
                <td> {this.props.thePrice}</td>

            </tr>



        )
    }



}
export default ProductRaw;