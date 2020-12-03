import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <>
              <tr key= {this.props.idKey}>
                  <td>
                      {this.props.name}
                  </td>
                  <td>
                      {this.props.price}
                  </td>
                  <td>
                      {this.props.category}
                  </td>
              </tr>  
            </>
        )
    }
}

//{this.props.price} or {this.props.goods.price} ?
// this.props.price, as its defined in ptable.js