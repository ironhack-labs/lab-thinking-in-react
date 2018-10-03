import React, { Component } from 'react';
import {Turquoise} from './ProductCategoryRow'
import {Red} from './ProductRow'


export class Green extends Component {
  constructor(props){
    super(props);
    this.className='green';
  }

  render() {
    return (
    <div className={this.className}>
     <Turquoise/>
     <Red/>
    </div>
    )
  }

}