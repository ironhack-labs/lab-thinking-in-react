import React from 'react'
import ProductRow from "./ProductRow"

function ProductTable(props) {

    const filteredProduct= props.products.filter((eachProduct)=>{
        return eachProduct.name.toLowerCase().includes(props.searchValue.toLowerCase())
})

  return (
    <div>
        <h2>Product list</h2>
        {filteredProduct.map ((eachProduct, index)=>{
            return (
                <ProductRow key={index}eachProduct={eachProduct} index={index} setProducts={props.setProducts} />
            )
        })}
    </div>
  )
}

export default ProductTable