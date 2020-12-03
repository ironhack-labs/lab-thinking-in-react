import React, { Component } from "react";

// import Data from "./../data.json";
import ProductRow from './ProductRow'

class ProductTable extends Component {
  constructor(props) {
    super(props);
      this.state = {
          data: props.items
          
        
    }
  }


    render() {
        
        // console.log(this.state.data)

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

            {this.state.data.map(elm => <ProductRow key={elm.id} stocked={elm.stocked} name={elm.name} price={elm.price} />)}
            
      </table>
    )
  }
}

export default ProductTable
