import React from 'react'
import ProductRow from './ProductRow';
export default function ProductTable(props) {
  return (
    <ProductRow products={props.products} searchQuery={props.searchQuery} instock={props.instock}/>
  )
}
