import React, {Component} from 'react';


class ProductRow extends Component {
  state={

  }

  render(){
    const {name, price, stocked} = this.props.product;
    
    return (
      <tr>
        <td style={{color: stocked ? 'initial' : 'red'}}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

export default ProductRow;