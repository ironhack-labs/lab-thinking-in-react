import React from 'react'

function ProductsRow({productsToShow}) {
    return (
        <tbody>
            {productsToShow.map((eachProduct) => {
                return (
                    <tr key={eachProduct.id}>
                    {eachProduct.inStock ? 
                    <td>{eachProduct.name}</td> :
                        <td style={{color:"red"}}>{eachProduct.name}</td>}
                    <td>{eachProduct.price}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default ProductsRow