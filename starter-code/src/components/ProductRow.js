import React, { Component } from 'react';

export default class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, price } = this.props.data;

    return (
      <div className="columns">
        <div className="column is-half">
          {name}
        </div>
        <div className="column is-half">
          {price}
        </div>
      </div>
    );
  }
}