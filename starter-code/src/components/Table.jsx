import React from 'react'
import ProductRow from './ProductRow'

function Table(props) {
    console.log(props)
    const { products } = props;
    console.log(products)
    const filtered = products.filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase()) ? true : false
      });
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { filtered.map((product) => {
            return <ProductRow name={product.name} price={product.price} stocked={product.stocked}/>
          })}
        </tbody>
    </table>
    )
  }

export default Table;