import React from 'react'

class ProductRow extends React.Component{

  render(){

    const productsResult = this.props.products.map((product,index)=>{
        return product.stocked ? (
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        ) : (
            <tr key={index}>
            <td style={{color: 'red'}}>{product.name}</td>
            <td style={{color: 'red'}}>{product.price}</td>
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