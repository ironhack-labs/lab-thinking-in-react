import React from "react";
import { Columns } from 'react-bulma-components/full';

import "./CategoryDisplay.css";

class CategoryDisplay extends React.Component{

  render(){

    const {category, products} = this.props;

    const productsHTML = products.map(product => (
        <Columns key={product.name} breakpoint={"mobile"} className={(!product.stocked) ? "out-of-stock": ""}>
          <Columns.Column size={"one-quarter"}>{product.name}</Columns.Column>
          <Columns.Column size={"one-quarter"}>{product.price}</Columns.Column>
        </Columns>

    ));

    return (
      <div className={"CategoryDisplay"}>
        <h3>{category}</h3>
        {productsHTML}
        <hr/>
      </div>
    )
  }
}

export default CategoryDisplay;