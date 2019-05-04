import React from 'react';

export default function productRow(props) {
	return(
		<tr className="productRow">
			<td className="rowValue">{props.name}</td>
			<td className="rowValue">{props.category}</td>
			<td className="rowValue">{props.price}</td>
		</tr>
	)
}