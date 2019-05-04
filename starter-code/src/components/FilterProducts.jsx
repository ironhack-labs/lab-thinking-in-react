import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilteredProducts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"products" : props.data,
			"allProducts" : props.data,
			"stockChecked": false,
		}
	}

	stockFilter = [];

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
		this.setState({"products" : filteredProducts},
		)
	}

	inStockFilter() {
		this.state.stockChecked ? this.setState({"stockChecked": false}, console.log("stock was true, now: ", this.state)) : this.setState({"stockChecked": true}, console.log("stock was false, now: ", this.state))
	}

	render() {
		return(
		<div className="productsContainer">
			<h1 className="heading">IronStore</h1>
			<SearchBar updateTable={(searchTerm) => this.searchFilter(searchTerm)} stockFilter={() => this.inStockFilter()} />
			<ProductTable products={this.state.products} stocked={this.state.stockChecked} />
		</div>
	)
	}
} 