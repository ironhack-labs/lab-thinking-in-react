import React from "react";
// import data from '../data.json';

export default class ProductRow extends React.Component{
    render() {
        return (
            <tr>
               <td>{this.props.name}</td>
               <td>{this.props.price}</td>
            </tr>
        )
    }
}