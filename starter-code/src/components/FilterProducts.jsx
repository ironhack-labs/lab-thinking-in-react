import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilteredProducts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"filteredProducts" : props
		}
	}

	searchFilter(searchTerm) {
		console.log("here i am, and here is the search term: ", searchTerm)
	}

	render() {
		return(
		<div className="productsContainer">
			<h1 className="heading">IronStore</h1>
			<SearchBar updateTable={(searchTerm) => this.searchFilter(searchTerm)} />
			<ProductTable {...this.state.filteredProducts} />
		</div>
	)
	}
} 