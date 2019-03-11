import React, { Component } from 'react';
import Products from '../services/data.json'
import ListItem from './ListItem'

export default class List extends Component {

  state = {
    products: this.props.items,
    stock: false
  }
  

  componentDidMount = () => {

  }


  render = ()=> {
console.log(this.props.stock)

      return (
        <div className='mt-5'>
      <div className="container mb-4 ">
      <div className="row  bg-info">
        <div className="col-sm col-6 p-3 border border-white text-white">
            NAME
        </div>
        <div className="col-sm col-6 p-3 border border-white text-white">
            PRICE 
        </div>
      </div>
    </div>
        <div className=''>
        {this.props.items.map(product => 
           <ListItem printStock={this.stockState} stock={this.props.stock} {...product}></ListItem>
              )}
        </div>
      </div>
      );
    }
}