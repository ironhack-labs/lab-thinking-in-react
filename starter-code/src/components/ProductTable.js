import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
                
            <tbody>
              {
                  props.data.map((elm, idx)=> {
              return(
                    <ProductRow key={idx} name={elm.name} price={elm.price}/>)
              })
              }
            </tbody>
        </table>
    )
}


export default ProductTable