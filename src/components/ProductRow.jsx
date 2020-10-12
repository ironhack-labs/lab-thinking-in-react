import React from 'react'

class ProductRow extends React.Component{

  
  render() {
    return (
      <tr>
        <th>{this.props}</th>
      </tr>
    )
  }
}

export default ProductRow