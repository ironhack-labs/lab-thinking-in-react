import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

class FilterableProductTable extends Component {
	state = {
		products: data.data
	};

	filterProductTable = (search, stock) => {
		const newState = { ...this.state };

		newState.products = data.data.filter((product) => {
			console.log(stock);
			if (stock === false) {
				return product.name.indexOf(search) === 0;
			} else {
				return product.name.indexOf(search) === 0 && product.stocked === stock;
			}
		});

		this.setState(newState);
	};

	render() {
		return (
			<div className="supercontainer">
				<div>
					<SearchBar filterAndCheckStock={this.filterProductTable} />
				</div>

				<div className="food-box">
					<ProductTable listproduct={this.state.products} />
				</div>
			</div>
		);
	}
}

export default FilterableProductTable;