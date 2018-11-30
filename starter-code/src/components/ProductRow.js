import React, { Component } from "react";
import productsArray from "../data.json";
import "./ProductRow.css";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: productsArray,
      stocked: true,
     }
  }

  render() { 
    const { data } = this.state.data;
    const { name, category, price, stocked } = this.props;
    const { search } = this.state;
    
    console.log(name, category, price, stocked)
    
    return ( 
      <div>
          
          <tr className="ProductRow">
          <td className={stocked ? 
            "" : "red"}>
          {name}
          </td>
          <td>{price}</td>
          </tr>
        
        
        
      </div>
    )
  }
}
 
export default ProductRow;