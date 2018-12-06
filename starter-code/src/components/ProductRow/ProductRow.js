import React,{Component} from 'react'
import Products from '../../data.json'

export default class ProductRow  extends Component {
  constructor(){
    super()
    this.state = {
      AllProducts: Object.values(Products)[0]
    }
    
  }
  render() {
    return (
      <div>
        <tbody>
          <tr>
            {this.state.AllProducts.map((product)=>{
              return(
                <div>
                <td>{product.name}</td>
                <td>{product.price}</td>
                </div>
              )
            })}
          </tr>
        </tbody>
      </div>
    )
  }
}
