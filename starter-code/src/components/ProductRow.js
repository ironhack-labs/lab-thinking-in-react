import React, { Component } from 'react';

import './ProductRow.css';

class ProductRow extends Component{


  render(){
    
    const { value } = this.props;

    return(
      <div className="content">
          <p>{value.name}</p>
          <p>{value.price}</p>
      </div>
    ) 
  }

}

export default ProductRow;