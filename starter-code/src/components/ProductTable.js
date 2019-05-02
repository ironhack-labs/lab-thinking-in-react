import React from "react";
import "./ProductTable.css"
import ProductRow from "./ProductRow.js";

class ProductTable extends React.Component {
  constructor(props){  
    console.log('Constructor ', props);
    super(props);
    this.state = {
      products: props.datos};
  }

  render() {
    let mappedProducts = this.props.datos.map(product => {
      product["key"] = Math.round(Math.random() * 10000000);

      return (
        <React.Fragment>
          <ProductRow {...product} />
        </React.Fragment>
      );
      })

      return (
        <div className="productTable"> 
          {mappedProducts}
        </div> 
      )
  }
}

export default ProductTable;