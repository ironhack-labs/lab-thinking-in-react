import React, { Component } from 'react';

export default class ProductTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"name" : this.props.name,
			"category" : this.props.category,
			"price" : this.props.price,
		}
	}

	componentDidMount() {
	}

	render() {
		return(
			<tr className="productRow">
				<td className="rowValue">{this.state.name}</td>
				<td className="rowValue">{this.state.category}</td>
				<td className="rowValue">{this.state.price}</td>
			</tr>
		)
	}
}