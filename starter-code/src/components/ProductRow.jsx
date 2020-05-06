// import React, { Component } from 'react'

// class ProductRow extends Component {

//   state = {
//     products: this.props.products
//   }

//   render() {

//     // console.log(this.state.products)
//     // console.log(this.props.products.data)

//     return (

//       this.state.products.map((oneProduct, index)=>(
//         <tr key={index}>
//           <td style={{color : oneProduct.stocked ? 'inherit' : 'red'}}>{oneProduct.name}</td>
//           <td>{oneProduct.price}</td>
//         </tr>
//       ))

//     )
//   }
// }

// export default ProductRow


import React from 'react'

function ProductRow(props) {
  return (
    <tr>
      <td style={{color : props.stocked ? 'inherit' : 'red'}}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default ProductRow
