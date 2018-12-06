import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <thead>
            <tr className="header">
              <th>{this.props.name}</th>
              <th>Price LO QUE CUETA: {this.props.pepe}</th>
            </tr>
          </thead> 
      </div>
    )
  }
}
