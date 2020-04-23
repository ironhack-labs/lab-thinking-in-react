import React, { Component } from 'react';



class ProductRow extends Component {
	render() {
		const { name, price, stocked} = this.props;
		const withoutStocked = { "border": "2px solid red", "borderRadius": "10px" }
		const withStocked = { "border": "2px solid black", "borderRadius": "10px" }
		return (
			<tr >
				<td style={ stocked ? withStocked : withoutStocked }> { name } </td>
				<td style={ stocked ? withStocked : withoutStocked }> { price } </td>
			</tr>
		);
	}
}


export default ProductRow;