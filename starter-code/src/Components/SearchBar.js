import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			stocked: false
		};
		this.handlerChange = this.handlerChange.bind(this);
		
	}

	handlerChange(e) {
		let { name, value } = e.target;
		this.setState({ [name]: value }, () => {
			this.props.SearchBar(this.state);
		});
	}

  

	render() {
		return (
			<div>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={(e) => this.handlerChange(e)}
					placeholder="Search"
				/>
				<div>
					<label>Only show products in Stock</label>
					<input
						name="checkStock"
						type="checkbox"
                        checked={this.state.stocked}
                        onClick={(e) => this.handlerChange(e)}
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
