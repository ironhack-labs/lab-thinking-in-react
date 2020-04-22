import React, {Component} from 'react';
import '../App.css'

class ShowData extends Component {

  render(){
    const {data} = this.props

    return (
      <div className="show-products">
        {data.map((product)=>{
          if(product.stocked){
            return (
              <div key={product.name}>
                {product.name} - {product.price}
               </div>
            )
          } else {
            return (
              <div key={product.name} style={{color: "red"}} >
                {product.name} - {product.price}
              </div>
              )  
          }
        })
        }
      </div>
    )
  }
}

export default ShowData