import React from 'react'
import ProductRow from './ProductRow.js'

export default function ProductTable({products}) {
    console.log(products);
    const Arrproducts = products.map(({name,price})=> {
    console.log(Arrproducts.name)
    return (
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Price </th>
        
        
        </tr>
        
        </thead>
        
        <tbody>
        
       
        <ProductRow name={name} price={price} />
    
        
        </tbody>
        
        </table>
    )
})
return <div>{products}</div>
}
