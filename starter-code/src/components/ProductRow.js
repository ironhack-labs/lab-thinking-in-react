import React, { Component } from 'react';

import '../App.css';


class productRow extends Component {
    constructor() {
        super()
    }

    isInStock = () => {

    }

    render() {
        return (

            <tr>
                <td className={this.props.item.stocked ? "green" : "red"}>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
            </tr>
        )
    }

}


export default productRow;
