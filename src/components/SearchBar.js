import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import './SearchBar.css';

export default class SearchBar extends Component {

	handleSearch = event => {
		this.props.search(event.target.value);
	};
	handleCheckBox = event => {
		this.props.checkbox(event.target.checked);
	};

	render() {
		return (
			<div>
				<div>
					<h1>IronStore</h1>
				</div>
				<Form>
					<Form.Group controlId="searchBar">
						<div>
							<Form.Label size="lg">Search</Form.Label>
						</div>
						<div>
							<Form.Control
								size="lg"
								type="text"
								placeholder="search for a product"
								onChange={event => this.handleSearch(event)}/>
						</div>
					</Form.Group>

					<Form.Group controlId="Checkbox">
						<div>
							<Form.Check size="lg" type="checkbox"
										inline label="Only show products in stock"
										onChange={event => this.handleCheckBox(event)}/>
						</div>
					</Form.Group>
				</Form>
			</div>
		);
	}
}