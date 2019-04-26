import React, { Component } from 'react';

class ProductTable extends Component {

  render() {

    return (
      <div className="box">
  <article className="media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.price}</small>
        </p>
      </div>
    </div>
  </article>
</div>
    )
  }
}

export default ProductTable;