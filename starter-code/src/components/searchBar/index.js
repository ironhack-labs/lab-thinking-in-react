import React from 'react';
import './searchBar.css';

function SearchBar(props) {
	const handleChange = (e) => {
		props.updateSearchInput(e.target.value);
	};

	return (
		<div>
			<h3 className="has-text-centered">Search</h3>
			<input
				className="input"
				placeholder="Type the item that you want to search..."
				onChange={(e) => handleChange(e)}
			/>
			<div className="has-text-centered">
				<input
					className="checkbox__input"
					type="checkbox"
					onChange={props.updateCheckBox}
				/>
				<label>Only show products on stock</label>
			</div>
		</div>
	);
}

export default SearchBar;
