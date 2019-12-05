import React, { Component } from 'react'

export default class Product extends Component {
  




    render() {
        return (
            <React.Fragment>
               <tr>
                    <td style={this.props.data.stocked ? {color: "green"} : {color: "red"} }>{this.props.data.name}
                    </td >
                    <td style={this.props.data.stocked ? {color: "green"} : {color: "red"} }>{this.props.data.price}</td>
                </tr>
            </React.Fragment>
        )
    }
} 
