import React from 'react'


const TableItem = (props) => {
    return (
        < tr style={{ color: props.info.stocked ? "black" : 'red' }} >
            <td>{props.info.name}</td>
            <td>{props.info.price}</td>
        </tr >


    )

}

export default TableItem
