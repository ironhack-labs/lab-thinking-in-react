

import React, { Component } from 'react';
export default class ListItem extends Component {

  render = ()=> {
    if(!this.props.stock){
      return(
        <div className="container border-top p-3  ">
          <div className="row">
            <div className={(!this.props.stocked) ?  'col-sm red col-6' : 'col-sm col-6'}>
              {this.props.name}
            </div>
            <div className="col-sm col-6">
            {this.props.price}
            </div>
          </div>
        </div>
    )} else if(this.props.stock && this.props.stocked){
      return(
        <div className="container border-top p-3  ">
          <div className="row">
            <div className='col-sm col-6'>
              {this.props.name}
            </div>
            <div className="col-sm col-6">
            {this.props.price}
            </div>
          </div>
        </div>
      )
    } else{
      return(
      null
      )
    } 
 } 
}