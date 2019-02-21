import React, { Component } from 'react';

export class Product extends Component {
  render () {
    return (
      <div>
        <div>
            <p>{this.props.name} {this.props.price}</p>
        </div>
      </div>
    )
  }
}