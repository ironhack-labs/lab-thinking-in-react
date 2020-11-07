import React, {Component} from 'react';

class ProductRow extends Component {

    render() {
        return(
        <tr key={this.props.idKey}>
            {this.props.stocked ? <td className='py-4'>{this.props.name}</td> : <td className='has-text-danger py-4'>{this.props.name}</td>}
            <td className='py-4'>{this.props.price}</td>
            <td className='py-4'>{this.props.cat}</td>
        </tr>
    )}
}

export default ProductRow;