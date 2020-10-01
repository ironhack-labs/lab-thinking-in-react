import React from 'react'

export default ({name, price, stocked}) => {
    const stockRed = !stocked ? 'red' : 'black'

    return (
        <tr style={{color: `${stockRed}`}}>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    )
}

