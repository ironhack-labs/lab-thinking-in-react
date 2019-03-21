import React, { Component } from 'react'

import ProductRow from './ProductRow';

import productImport from "../data.json"

export default class ProductTable extends Component {

  constructor(){
    super()
    this.state = {
      products : productImport.data,

    }
    this.color = {color: "red"}
  }

  searchProduct = search => {
    // console.log(search)
    let productstobeprinted = [...this.state.products]
    productstobeprinted = productstobeprinted.filter(product => product.name.includes(search))
    this.setState({
      producs: productstobeprinted
      
    })

  }


  
  render() {
    return (
      
      <div>
        {this.searchProduct(this.props.cadenaabuscar)}
        <div className="container">
          <div className="row">
            <div className="col-6">Name</div>
            <div className="col-6">Price</div>
          </div>
        </div>


        {this.state.products.map((product, index) => {
          // console.log(product.stocked)
          return product.stocked === false ? 
            (<ProductRow key={index} {...product} colorStyle={this.color}/>)
            : 
            (<ProductRow key={index} {...product}/>)
          
        })
      }
      
    </div>
    )
  }
}
