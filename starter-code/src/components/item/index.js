import React from 'react';
import './item.css';

export default function Item(props) {
	return (
		<li
			className={`${
				!props.itemInfo.stocked ? 'has-text-danger' : undefined
			} list-items`}>
			<span>{props.itemInfo.name}</span>
			<span>{props.itemInfo.price}</span>
		</li>
	);
}
