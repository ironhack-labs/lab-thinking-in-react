import React, { Component } from 'react'

const DataBox = props => {

    
    return (
        <tr className="itemBox" stocked={props.stocked.toString()} cat={props.cat} key={props.index}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            {/* <td> <button onClick={props.clickToDelete}>Delete</button></td> */}
        </tr>
    )
}

export default DataBox
