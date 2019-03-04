import React, { Component } from 'react';
import ProductRow from "./ProductRow"

class ProductTable extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {              
              this.props.products.map((producto,index)=>{
                return(
                  <tr key={index}>
                  <ProductRow item = {{...producto}}/>
                  </tr>
                )}                
              )
            }            
          </tbody>          
        </table>
      </div>       
    );
  }
}

export default ProductTable;