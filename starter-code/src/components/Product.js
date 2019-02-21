import React, { Component } from 'react';

export class Product extends Component {
  render () {
    return (
      <div className="tableRow row">
            <p className="col-6">{this.props.name}</p>
            <p className="col-6">{this.props.price}</p>
      </div>
    )
  }
}