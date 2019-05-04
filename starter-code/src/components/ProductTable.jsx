import React, { Component } from 'react';
import ProductRow from "./ProductRow"

export default function productTable(props) {
	var products = props.products
	console.log(products)

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
					props.products.map( (product, index) => (
						<ProductRow key={index} {...product} />
					))
				}
			</tbody>
		</table>
	)
}