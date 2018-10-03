import React, { Component } from "react";
import data from "../data.json";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor() {
    super();
    // this.state = {
    //   data: data.data
    // };
  }

  render() {
    // console.log(this.props.data);
    return (
      <div style={{ border: "green" }}>
        <p>Hola</p>
        <ProductCategoryRow category="Electronics" />
        <div>
          {this.props.data.map((e, i) => {
            if (e.category === "Electronics") {
              return (<ProductRow key={e.name} name={e.name} price={e.price} color={e.stocked?'black':'red'}/>);
            }
          })}
        </div>
        <ProductCategoryRow category="Sporting Goods" />
        <div>
          {this.props.data.map((e, i) => {
            if (e.category === "Sporting Goods") {
              return (<ProductRow key={e.name} name={e.name} price={e.price} color={e.stocked?'black':'red'}/>);
            }
          })}
        </div>
      </div>
    );
  }
}

export default ProductTable;
