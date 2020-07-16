import React from 'react'


export default function product(props) {
    console.log(props)

    return (
        <tr key={props.data.id} style={{color: props.data.stocked ? "black" : "red"}} >
                <td>{props.data.name}</td>
                <td>{props.data.price}</td>
        </tr> 
    )

}
