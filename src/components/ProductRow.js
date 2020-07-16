import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const allProducts = this.props.filtered.map((product)=> {
      
    
            console.log(product)
            return (
            
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
        
          );
         });
         return <>{allProducts}</>;
    }
}








