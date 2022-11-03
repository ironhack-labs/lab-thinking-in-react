import React from 'react'
import ProductRow from './ProductRow'

 function ProductTable(props) {
  return (
    <div className='productTable'>
        <h1>ProductTable</h1>
        <ProductRow products={props.products} stateGet={props.queryState} setState={props.setState} />
        {console.log({TABLETEST: props.queryState.query})}
    </div>
  )
}


export default ProductTable