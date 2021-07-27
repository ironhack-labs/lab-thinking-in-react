import React,{ Component } from "react";
import './ProductRow.css'

class ProductRow extends Component {
    render() {
        return (
            <tr className='product-row'>
                <td className={!this.props.stocked ? 'no-stocked' : 'stocked'}>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default ProductRow;