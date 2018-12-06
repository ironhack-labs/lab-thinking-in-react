import React, { Component } from 'react'


export default class ProductCategoryRow extends Component {
  constructor(){
    super()
    this.state={
      categoryProducts:null,
      //crear estado que vais a usar
    }
  }
  componentWillMount=()=>{
var filteredProducts = this.state.categoryProducts

//recibir las props

  }
  render() {
    console.log(this.state.filteredProducts)
    return (
      <div>
  
        <tr>
          <th>Tabla</th>
        </tr>
      </div>
    )
  }
}
