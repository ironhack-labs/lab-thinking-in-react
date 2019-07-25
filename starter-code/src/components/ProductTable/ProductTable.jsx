import React, { Component } from 'react';
import TableLine from '../TableLine/TableLine'

class ProductTable extends Component {
  constructor(props) {
    super(props) 
  }
  render(){
    return(
    <div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {this.props.items.map((item, index) => {
            return <TableLine key={index} {...item} />
          })}
      </table>
    </div>
    )
  }

}

export default ProductTable