import React from 'react';

export default function ProductRow(props) {
	const outOfStock = props.stocked ? '' : '#ff0000';
	return (
		<tr style={{color: outOfStock}} key={props.id}>
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	);
}