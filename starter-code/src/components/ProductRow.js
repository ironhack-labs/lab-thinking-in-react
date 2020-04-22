import React, {Component} from 'react';
import '../App.css';

class ProductRow extends Component {
  render(){
    const { price, name, stocked } = this.props; 
    return(
      <tr className='ProductRow'>
        <td style={{ 'color': (stocked ? 'black' : 'red') }} >{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

export default ProductRow; 