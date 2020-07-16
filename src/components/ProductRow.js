import React, {Component} from 'react';

export default class ProductRow extends Component {
render(){
    const {name, price, stocked} = this.props.product;
    return (
      <tr>
        <td style={{color: stocked ? 'black' : 'red'}}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
};
