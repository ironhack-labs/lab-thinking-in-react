import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: data.data
		};

		this.justInStock = this.justInStock.bind(this);
		this.filterProduct = this.filterProduct.bind(this);
	}

	justInStock() {
		let products = this.state.products;
		let inStock = [];
		products.map((product, index) => {
			if (product.stocked) {
				return inStock.push(product);
			}
		});
	}

	filterProduct(product) {
		let products = this.state.products;
		let searchedProduct = products.filter((e) => e.name.toLowerCase().includes(product.name.toLowerCase()));
		return searchedProduct;
	}

	render() {
		return (
			<div>
				<h1>IronStore</h1>
				<SearchBar SearchBar={this.filterProduct} />
				<ProductTable products={this.state.products} />
			</div>
		);
	}
}

export default FilterableProductTable;
