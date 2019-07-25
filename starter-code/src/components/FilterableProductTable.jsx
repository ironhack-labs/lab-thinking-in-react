import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
	constructor(props) {
			super(props)
	
			this.state = {
				products: this.props.products,
				filteredProducts: [],
				q: ''
			}
			this.inputHandler = this.inputHandler.bind(this)
		}

		inputHandler(event) {
			let q = event.target.value;

			q = q.toLowerCase();
			let productsCopy = [...this.state.products];

			productsCopy = productsCopy.filter(product => product.name.toLowerCase().includes(q));
			this.setState({
				filteredProducts: productsCopy,
				q
			});
	}

		render() {
			let productsList = this.state.products;

			if (this.state.q) productsList = this.state.filteredProducts;

			return (
				<div className="App">
				<h1>IronStore</h1>
				<SearchBar q={this.state.q} data={this.state.data} inputHandler={this.inputHandler}/>
				<ProductTable products={productsList} />
				</div>
			);
		}

}

export default FilterableProductTable;