import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			filteredProducts: []
		};
	}

	componentDidMount() {
		this.setState({ products: this.props.data, filteredProducts: this.props.data });
	}

	searchProduct = (search) => {
		console.log('State en search product', this.state);
		let filteredProducts = [ ...this.state.products ];
		filteredProducts = filteredProducts.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);
		this.setState({ filteredProducts });
	};

	showStockProducts = (stock) => {
		console.log(stock);
	};

	render() {
		console.log('props en filterable', this.props);
		return (
			<main>
				<h1>IronStore</h1>
				<SearchBar search={this.searchProduct} stock={this.showStockProducts} />
				<ProductTable {...this.state.filteredProducts} />
			</main>
		);
	}
}

export default FilterableProductTable;
