import React, { Component } from "react";
import "./producttable.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allTheProducts: this.props.dataholder
  //   };
  // }

  //good practice- the parent is the one with the constructor, all children get props passed to them instead

  showAllProducts = () => {
    // return this.state.allTheProducts.map((eachProduct, i) => {
    //   return <ProductRow key={i} eachProduct={eachProduct} />;
    // });
    return this.props.dataholder.map((eachProduct, i) => {
      // return <ProductRow key={i} eachProduct={eachProduct} />;
      return (
        <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} />
      );
    });
  };

  render() {
    return (
      <div className="productTableContainer">
        <div className="tableHead">
          <h4>Name</h4>
          <h4>Price</h4>
        </div>
        {this.showAllProducts()}
      </div>
    );
  }
}

export default ProductTable;
