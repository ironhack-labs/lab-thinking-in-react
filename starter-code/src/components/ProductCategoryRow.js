import React, { Component } from 'react';

class ProductCategoryRow extends Component{

  render(){

    const { value } = this.props;


    console.log(value);

    return(
      <h4>{value.category}</h4>
    )
  
  }

}

export default ProductCategoryRow;