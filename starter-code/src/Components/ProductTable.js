import React from 'react'
import Row from './ProductRow'

const Table = props => {
    console.log(props)
    return (
        <table>
 
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((elm, idx) => <Row  key={idx} {...elm} />)}
        </tbody>
    </table>
)
}


export default Table