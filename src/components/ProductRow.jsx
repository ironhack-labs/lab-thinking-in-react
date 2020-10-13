import React from 'react'

class ProductRow extends React.Component {

    render() {
      const stocked = this.props.product.stocked ? this.props.product.name : <span className={"text-danger"}>{this.props.product.name}</span>
      return (
        <tr>
          <th>{stocked}</th>
          <th>{this.props.product.price}</th>
        </tr>
      )
    }
}

export default ProductRow