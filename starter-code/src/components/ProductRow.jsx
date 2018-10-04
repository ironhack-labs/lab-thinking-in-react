import React, { Component } from "react";
import data from '../data.json'
import "../App.css";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return(
     <div>
    {data.map((element, index)=>{
    return(
          <p>{element.name}</p>
    )
    })}
    </div>
    )
  }
}

export default ProductRow;


