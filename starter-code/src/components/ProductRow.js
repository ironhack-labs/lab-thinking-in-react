import React, { Component } from 'react';
// import data from './data.json';
import './../App.css'



class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }


  render() {


    return (
      <div>

        <tr>
          <td style={this.props.myColor}>{this.props.name}</td>
          <td>{this.props.price}</td>

        </tr>

      </div>
    );
  }
}

export default ProductRow;
