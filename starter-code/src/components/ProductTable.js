import React from 'react';
import ProductRow from './ProductRow'


export default function ProductTable(props) {
  return (
    <div class="producttable">
      <div class="ptlabels">
      <span>Name</span> <span>Price</span>
      </div>
      {!props.checked &&
        props.product
          .filter(product => product.name.toLowerCase().includes(props.search))
          .map(product => <ProductRow product={product} />)}
      {props.checked &&
        props.product
          .filter(product => product.stocked && product.name.toLowerCase().includes(props.search))
          .map(product => <ProductRow product={product} />)}
    </div>
  )
}