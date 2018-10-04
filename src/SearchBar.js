import React, { Component } from 'react';

export class Blue extends Component {
  constructor(props){
    super(props);
    this.className='blue';
  }

  render() {
    return (
    <div className={this.className}>
    </div>
    )
  }

}