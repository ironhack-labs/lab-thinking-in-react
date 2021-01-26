import React, { Component } from 'react'

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
  }
  render() {
    return (
      <div>
        {this.props.products.map(p => <div key={p.name}>{p.name}</div>)}
      </div>
    )
  }
}
