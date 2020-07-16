import React from 'react'
import ProductRow from './ProductRow.js'


export default function ProductTable(props) {
    //console.log(products);
    //const Arrproducts = products.map(({name,price})=> {
    //console.log(Arrproducts.name)
    return (
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Price </th>
        
        
        </tr>
        
        </thead>
        
        <tbody>
        
      
        <ProductRow filtered = {props.products} />
    
       
        </tbody>
        
        </table>
    )
//})
//return <div>{products}</div>
}
