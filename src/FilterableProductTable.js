import React, { Component } from 'react';
import {Blue} from './SearchBar';
import {Green} from './ProductTable'

export class Orange extends Component {
  constructor(props){
    super(props);
    this.className='orange';
  }

  render() {
    return (
    <div className={this.className}>
      <Blue/>
      <Green/>
    </div>
    )
  }

}