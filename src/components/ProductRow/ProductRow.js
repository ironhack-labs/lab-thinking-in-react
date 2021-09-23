import React from 'react'

const ProductRow = (props) => {

    return (
        <>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </>
    )

}

export default ProductRow


