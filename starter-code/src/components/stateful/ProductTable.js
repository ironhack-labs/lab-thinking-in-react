import React, { Component } from "react";
import ProductCard from "../stateless/ProductCard"

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {  };
  
  }

  render() {
    return (
    
    <div className="container">


      <div className="row justify-content-around">
        <div className="col-md-3">
          <p className="headers">Name</p>
        </div>
        <div className="col-md-3">
          <p className="headers">Price</p>
        </div>
      </div>
      {this.props.products.map( (item, idx) => {
        return (

          <ProductCard key={idx} product={item}/>

        )

      })}
    </div>
    
    )
  }
}

export default ProductTable;
