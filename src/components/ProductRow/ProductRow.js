import React, {Component} from 'react';

class ProductRow extends Component {

    render() {
        return(
        <tr key={this.props.idKey}>
            <td className={this.props.stocked ? 'py-4' : 'py-4 has-text-danger'} >{this.props.name}</td>
            <td className='py-4'>{this.props.price}</td>
            <td className='py-4'>{this.props.cat}</td>
        </tr>
    )}
}

export default ProductRow;