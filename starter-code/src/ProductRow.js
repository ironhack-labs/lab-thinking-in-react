import React, { Component } from 'react';




class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            
// {this.props.category}        
            <tr>
<td style={this.props.style}>{this.props.name}</td>

<td style={this.props.style}>{this.props.price}</td>

            </tr>
        
        );
      }
}


export default ProductRow;