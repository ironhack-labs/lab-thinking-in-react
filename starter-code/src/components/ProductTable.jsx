import React from 'react';
import ProductRow from "./ProductRow"

export default function productTable(props) {
	return(
		<table className="table-center">
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
      {
				props.products.map( (product, index) => (
					<tbody>
						{
						!props.stocked ? <ProductRow key={index} {...product} /> :
						product.stocked && <ProductRow key={index} {...product} />
						}
					</tbody>))
			}
		</table>
	)
}