import React from 'react'

export default function ProductRow(props) {
	return (
		<>
			<h2>{props.products.category}</h2>
            <h2>{props.products.price}</h2>
            <h2>{props.products.inStock}</h2>
            <h2>{props.products.name}</h2>
            <h2>{props.products.id}</h2>
		</>
	)
}

