import React from 'react'
import "./ProductRow.css"

function ProductRow({products, searchParam}) {

    
    const displayProducts = products.data.filter((product) => {
        return product.name.toLowerCase().includes(searchParam.toLowerCase())
    }).map((item) => 

    <div  className="columnContainer">
       <td style={{ color: item.stocked ? 'default':'red' }} className="rowElement" >{item.name}</td>
       <td style={{ color: item.stocked ? 'default':'red' }} className="rowElement" >{item.price}</td>
    </div>

    )
    return (
        <div>
           {displayProducts}
        </div> 
    )
}

export default ProductRow
