import React, { Component } from "react";
import "./styles.css";

export default class ProductRow extends Component {

  render() {
    const { products } = this.props;
    return (
      <div>
          <div className="line mt-20">
                <div className="item itemS"> Name </div>
                <div className="item itemS"> Price </div>
         </div>

          {products.data.map((product,index) => {
            return (
                    <div key={index} className="line">
                        <div className="item"> {product.name} </div>
                        <div className="item"> {product.price} </div>
                    </div>
            )
          })}
      </div>
    );
  }
}
