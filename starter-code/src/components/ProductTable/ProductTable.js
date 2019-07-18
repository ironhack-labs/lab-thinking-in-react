import React, { Component } from "react";
import Row from "../ProductRow/Row";


export default class ProductTable extends Component {
  
    render() {
    return (
      
        <table className="table">
          <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
            
            
          {
            this.props.products.map((product, idx)=> <Row key={idx} product={product}/>)
          }

          </tbody>
        </table>
      
    );
  }
}
