import React from 'react'

const ProductRow = ({price, stocked, name, id }) => {


    return (
        <div className="productrow">
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </div>)
}

export default ProductRow