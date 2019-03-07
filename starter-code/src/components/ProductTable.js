import React, { Component } from 'react';

class productTable extends Component {
  render() {
    return (
      <div className="productTableContainer">
        <div className="flex tableHead row">
          <h4>Name</h4>
          <h4>Price</h4>
        </div>
      </div>
    );
  }
}

export default productTable;
