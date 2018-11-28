import React, { Component } from 'react';

import Product from  './Product';

class ProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  render() {
    let myProducts = <tr><td>'No product available'</td></tr>;
    if(this.props.data) {
      myProducts = this.props.data.map((prod,i) => {
        return <Product key={i} {...prod} />
      })
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {myProducts}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;