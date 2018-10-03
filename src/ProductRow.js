import React, { Component } from 'react';

class ProdcutRow extends Component {
    render() {
        let { name, price } = this.props
        return(
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default ProdcutRow;