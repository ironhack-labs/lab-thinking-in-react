import React, { Component } from "react";
import styled from '@emotion/styled'

const Div = styled.div`
 width: 100px
`

class List extends Component {
  
  render() {
    let red;
    this.props.element.stocked ? (red = "") : (red = " redColor");
    return (
      <li>
        
        <Div className={this.props.className + red}>
          {this.props.element.name}
        </Div>
        <div1 className={this.props.className}>{this.props.element.price}</div1>
      </li>
    );
  }
}
export default List;
