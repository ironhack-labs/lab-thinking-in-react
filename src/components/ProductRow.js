import React from 'react'
import jsondata from '../data.json'


const ProductRow = ({ jsondata })

return (
    <>
       <p>{jsondata.name}</p><p>{jsondata.price}</p>
    </>
)


export default ProductRow