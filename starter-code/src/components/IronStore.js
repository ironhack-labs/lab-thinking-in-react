import React, { Component } from 'react';
import List from './List'

export default class IronStore extends Component {

  

  render = ()=> {

      return (
        <section>
          <div className='container mt-5'>
          </div>
          <List  stock={this.props.stock} items={this.props.items}></List>
        </section>
      );
    }
}