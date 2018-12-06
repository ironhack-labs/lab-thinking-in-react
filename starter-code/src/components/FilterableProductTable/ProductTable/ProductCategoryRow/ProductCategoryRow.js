import React, { Component } from 'react'




export default class ProductCategoryRow extends Component {
  constructor (){
    super();
    this.state = {
      datas: [],
    }
 
  }
  render() {
    return (
      <div>
      
        
        <table>
          
            <th>
              {this.props.category}
            </th>
      
        </table>
      </div>
    )
  }
}
