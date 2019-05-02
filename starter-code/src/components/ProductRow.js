import React from "react";
import "./ProductRow.css"

class ProductRow extends React.Component {
  constructor(props){
    super();
    this.state = {
      category: props.category,
      price: props.price,
      stocked: props.stocked,
      name: props.name
    };
  }

    render() {
        return (
          <React.Fragment> 
            <div className="productRow">
              {this.state.stocked 
                ? <p className="onStock">{this.state.name}</p> 
                : <p className="outOfStock">{this.state.name}</p>}             
              <p>{this.state.price}</p>           
            </div>
          </React.Fragment> 
        )
    }
}

export default ProductRow;