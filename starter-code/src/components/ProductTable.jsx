import React, { Component } from 'react';
import ProductRow from "./ProductRow"

export default function productTable(props) {
	console.log("here i am in product table. props: ", props)

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