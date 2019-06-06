import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		console.log('props en filterable', this.props);
		return (
			<main>
				<h1>IronStore</h1>
				<SearchBar />
				<ProductTable {...this.props.data} />
			</main>
		);
	}
}

export default FilterableProductTable;
