import React, {Component } from 'react';
import './productrow.css';

class ProductRow extends Component {

constructor(props){
  super(props)
}

  render(){

    return(
      <div className="redborder">

        <span> {this.props.productx.name}</span>&nbsp;&nbsp;&nbsp;&nbsp; <span> {this.props.productx.price}</span>
      </div>
    )
  }
}

export default ProductRow;