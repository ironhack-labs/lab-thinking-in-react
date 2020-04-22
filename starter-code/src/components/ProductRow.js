import React, { Component } from 'react';


class ProductRow extends Component {
    

    render() {
        const { name, price, stocked} = this.props;
        const nonStockedStyle = {"border": "1px solid red"}
        const stockedStyle = {"border": "1px solid grey"}
        return (
            <tr >
                <td style={stocked ? stockedStyle : nonStockedStyle}> {name} </td>
                <td style={stocked ? stockedStyle : nonStockedStyle}> {price} </td>
            </tr>
        );
    }
}

export default ProductRow;
