import React, { Component } from 'react';

export class ProductRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
}

export default ProductRow;
