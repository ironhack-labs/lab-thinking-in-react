import React, { Component } from 'react';

export default class ProductRow extends Component {
    

    render() {
      return (
        <div className="total">
   
             <li>{this.props.name} {this.props.price} </li>
    
        </div>
      );
    }
  }