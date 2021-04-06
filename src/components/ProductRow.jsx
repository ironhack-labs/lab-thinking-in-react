import React from 'react';

const ProductRow = ({id, idx, name, price, stocked}) => {
	return(
		<>
		{
		stocked 
		? (
			<>
			<tr key={id}>
			<th scope="row">{idx + 1}</th>
			<td>{name}</td>
			<td>{price}</td>
			<td>✅</td>
			</tr>
			</>
		) : (
			<>
			<tr className="text-danger" key={id}>
			<th scope="row">{idx + 1}</th>
			<td>{name}</td>
			<td>{price}</td>
			<td>Out of Stock</td>
			</tr>
			</>
		)
		}
		</>
	)
}

export default ProductRow;