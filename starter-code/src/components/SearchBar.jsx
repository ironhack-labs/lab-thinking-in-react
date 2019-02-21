import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	state = {
		search: '',
		checkStock: false
	};

	filter = (e) => {
		const newState = { ...this.state };
		newState.search = e.target.value;
		this.setState(newState);
		this.props.filterAndCheckStock(newState.search, newState.checkStock);
	};

	clickHandler = () => {
		const newState = { ...this.state };
		newState.checkStock = !newState.checkStock;
		this.setState(newState);
		this.props.filterAndCheckStock(newState.search, newState.checkStock);
	};

	render() {
		return (
			<div class="search-bar">
				<p>Search</p>
				<input
					placeholder="Search your Product"
					className="input-search"
					type="text"
					onChange={(e) => this.filter(e)}
				/>
				<div className="check">
					<input id="check" type="checkbox" onClick={this.clickHandler} />
					<label for="check">Only show Products on stock</label>
				</div>
			</div>
		);
	}
}

export default SearchBar;
