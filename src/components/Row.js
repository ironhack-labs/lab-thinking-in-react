import React, { Component } from 'react'

export default class Row extends Component {
    render() {
        const filteredArr = this.props.data.filter(el => { return el.name.includes(this.props.filter)})
        const myData = filteredArr.map(el =>          
        <tr key={el.name}>
            {el.stocked ? <td>{el.name}</td> : <td style={{color: "red"}}>{el.name}</td>}
            <td>{el.price}</td>
        </tr>
        )
        return (
        <tbody>
            {myData}
        </tbody>
        );
    }
}
