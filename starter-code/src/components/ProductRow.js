import React, { Component } from 'react';
// import data from './data.json';


class ProductRow extends Component {
  constructor(props){
    super(props);
    this.state = {


    }
  }
  render() {
    return (
      <div>

<tr>
<td>{this.props.name}</td>
<td>{this.props.price}</td>


</tr>

      </div>
    );
  }
}

export default ProductRow;
