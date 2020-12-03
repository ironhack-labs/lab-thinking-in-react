import React, { Component } from 'react';



export default class ProductRow extends Component {
    render() {
        return (
            <>
                {this.props.products.data.map((product) => {
        return (
          <tr style={{color: product.stocked ? 'inherited' : 'red' }}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            {/* <td>{product.category}</td> */}
            <td>{product.stocked===true ? "yes" : "no"}</td>
          </tr>
         
        ) 
      }
      )
    }
        </>    
        )
    }
}

