import React, { Component } from 'react';
import ProductRow from "./ProductRow"

export default class ProductTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"productList" : this.props.data
		}
	}

	render() {
		return(
			<table className="productTable">
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.productList.map( (product, index) => (
							<ProductRow key={index} {...product} />
						))
					}
				</tbody>
			</table>
		)
	}
}