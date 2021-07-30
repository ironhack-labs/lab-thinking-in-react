import React from "react";
import './style.css'

class TableRow extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.name} </td>
                <td>{this.props.price} </td>
            </tr>
        )
    }
    
}

export default TableRow