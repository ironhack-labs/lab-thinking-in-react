import React from 'react';
import './product.css';


export default class Products extends React.Component {
    render() {
        return (

            <tr>
                <td className={this.props.stocked === true ? 'green' : ''}>{this.props.name }</td>
                <td>{this.props.price}</td>
            </tr>

        )
    }
}


