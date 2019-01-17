import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import styled from '@emotion/styled'

const Div = styled.div`
 width: 130px
`
class ProductTable extends Component {
  render() {
    return (
      <div>
        <div>
            <Div className={this.props.className}><h2>Name</h2></Div>
          
            <Div className={this.props.className}><h2>Price</h2></Div>
        </div>

        <ProductCategoryRow className={this.props.className} state={this.props.state} />
      </div>
    );
  }
}
export default ProductTable;
