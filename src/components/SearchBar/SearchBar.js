import './SearchBar.css';
import React from 'react';


function SearchBar(props) {

	return (
		<div>
			<div className="search-container">
				<input type="search" name="search" onChange={props.searchProduct()}></input>
			</div>
			<div className="checkbox">
				<label>Show products on Stock</label>
				<input type="checkbox" name="checkbox" onChange={props.onStock()}></input>
			</div>
		</div>
	);
}

export default SearchBar;