import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			stock: false
		};
	}

	handleChange = (e) => {
		let { name, value, checked } = e.target;
		value = checked ? checked : value;

		this.setState(
			{
				[name]: value
			},
			() => {
				this.props.search(this.state.search);
			}
		);
	};

	render() {
		return (
			<div>
				<label htmlFor="search">
					Search
					<input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
				</label>
				<label htmlFor="stock">
					<input type="checkbox" checked={this.state.stock} name="stock" onChange={this.handleChange} />
					Only show products on stock
				</label>
			</div>
		);
	}
}

export default SearchBar;
