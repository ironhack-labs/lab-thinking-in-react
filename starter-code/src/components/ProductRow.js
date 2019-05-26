import React from 'react'

class ProductRow extends React.Component {

  state = {
    inStock: true,
    category: ''
  }



  render() {
    const {category, name, price, stocked} = this.props.product
   
    const colorText = this.props.product.stocked
      ? 'product blackText'
      : 'product redText'
    
    console.log(this.props.product.stocked)
    return (
      <div className={colorText}>
        <p> {category} {name} {price}</p>
      </div>
    )
  }
}

export default ProductRow