import React, { Component } from 'react';
import './Products.css';


export default class Products extends Component {
constructor(props){
    super(props)
  
}

render() {
    return (
       
        <ul>
            <li>{this.props.name}</li>
            <li>{this.props.category}</li>
            <li>{this.props.price}</li>
            <li>{this.props.stocked}</li>
        </ul>
  


    );

    }
}