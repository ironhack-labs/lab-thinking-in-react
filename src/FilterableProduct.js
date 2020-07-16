
import React from 'react'
import Product from './product'

export default function FilterableProduct(props){
    console.log(props)

    const filteredProducts = props.products.map(product =>{
      
        return(
            <Product key={product.id} data={product}/> 
        )

    })
      
    
    return filteredProducts
}
