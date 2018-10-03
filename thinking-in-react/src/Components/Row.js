import React from 'react'


const Row = ({ props }) => {
    return (
        <tr>
            



            <td><img width="70px" alt={oneRow.name} src={oneRow.pictureUrl} /></td>
            <td>{oneRow.name}</td>
            <td>{oneRow.popularity}</td>
        </tr>
    )
}

export default ProductCategoryRow;



