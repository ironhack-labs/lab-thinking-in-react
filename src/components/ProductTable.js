import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {

    return (
        <table width="1200px"  align="center" cellSpacing="40px" cellPadding="0px">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>        
        </thead>
            <tbody>
                {props.products.map(element=>{
                    return <ProductRow name={element.name} price={element.price} key={element.id} stocked={element.stocked} category={element.category}/>
                })}
            </tbody>
        </table>
)
}

export default ProductTable