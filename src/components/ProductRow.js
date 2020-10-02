import React from 'react'

const ProductRow = (props) => {

    const divStyle = {
        color: props.item.stocked ? "black" : "red"
    }

    return (
        <>
            <tr>
                <td style={divStyle}>{props.item.name}</td>            
                <td>{props.item.price}</td>
            </tr>
        </>
    )

}

export default ProductRow;
