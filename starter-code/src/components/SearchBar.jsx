import React from 'react';

export default function SearchBar({ searchHandler }) {
	return (
		<div>
			<label id="content1">Search Bar</label>
			<input id="content2" onChange={searchHandler} type="text" name="Search" />
		</div>
	);
}
