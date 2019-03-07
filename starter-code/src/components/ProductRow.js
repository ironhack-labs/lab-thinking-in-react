import React, {Component} from 'react';

class ProductRow extends Component{

  constructor(props){
    super(props);
    
  }

  render(){
    if(this.props.product.stocked){
      return (
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
    return (
      <tr className='out-of-stock'>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
    
  }
}

export default ProductRow;