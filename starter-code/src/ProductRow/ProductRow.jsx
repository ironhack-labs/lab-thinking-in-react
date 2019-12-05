import React, { Component } from "react";




export default class ProductRow
 extends Component {
  constructor() {
    super();
  }

  render() {
        let name = this.props.name
        let price = this.props.price
        console.log(name)
    return (
      <div className = "ProductRow">
     <span>{name}     </span>
     <span>{price}</span>
    
      </div>
    );
  }
}