import React, { Component } from 'react';

export class Turquoise extends Component {
  constructor(props){
    super(props);
    this.className='turquoise';
  }

  render() {
    return (
    <div className={this.className}>
    </div>
    )
  }

}