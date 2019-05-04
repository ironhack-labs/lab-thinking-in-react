import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilteredProducts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"products" : props.data,
			"allProducts" : props.data
		}
	}

	objectContainsString(string, object) {
		var compString = string.toLowerCase()

		for (var key in object) {
			if (typeof(object[key]) !== "string" ) console.log("not a string.")
			else {
				var compObjectValue = object[key].toLowerCase()
				if (compObjectValue.includes(compString)) return true;
		}}

		return false;
	}

	searchFilter(searchTerm) {
		var filteredProducts = this.state.allProducts.filter( product => 
			this.objectContainsString(searchTerm, product)
		)

		// console.log("new filtered: ", filteredProducts);
		this.setState({"products" : filteredProducts},
			console.log("new state: ", this.state)
		)
	}

	render() {
		return(
		<div className="productsContainer">
			<h1 className="heading">IronStore</h1>
			<SearchBar updateTable={(searchTerm) => this.searchFilter(searchTerm)} />
			<ProductTable products={this.state.products} />
		</div>
	)
	}
} 