import React from 'react'


const ProductRow = ({ name, price, stocked }) => {

    return (

        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td style={{ color: stocked ? 'black' : 'red' }} >{price}</td>
                </tr>
            </tbody>
        </>
    )

}

export default ProductRow