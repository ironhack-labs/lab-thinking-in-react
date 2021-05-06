import React from 'react'

class ProductRow extends React.Component{

  render(){

    const productsResult = this.props.products.map((product,index)=>{
        return (
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        ) 
    })

    return (
        <tbody>
            {productsResult}
        </tbody>
    )
  }
}

export default ProductRow