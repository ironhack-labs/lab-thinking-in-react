import React, { Component } from 'react';
import './App.css';
import products from './data.json';

class App extends Component {
	render() {
		return (
			<div className="App">
				<FilterableProductTable />
			</div>
		);
	}
}

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allProducts: products,
			filteredProducts: [],
			showOnlyInStock: false,
			query: '',
		};
	}
	handleSearch(query) {
		this.setState({
			query: query,
		});
		if (query === '') {
			this.setState({
				filteredProducts: [],
			});
		} else {
			let filtered = this.state.allProducts.filter(v =>
				v.name.includes(query)
			);
			this.setState({
				filteredProducts: filtered,
			});
		}
	}
	handleChange(e) {
		this.setState(prevState => ({
			showOnlyInStock: !prevState.showOnlyInStock,
		}));
	}
	render() {
		let products;
		if (this.state.showOnlyInStock) {
			if (this.state.filteredProducts.length > 0) {
				products = this.state.filteredProducts.filter(
					v => v.stocked === true
				);
			} else
				products = this.state.allProducts.filter(
					v => v.stocked === true
				);
		} else {
			if (this.state.filteredProducts.length > 0) {
				products = this.state.filteredProducts;
			} else {
				products = this.state.allProducts;
			}
		}
		return (
			<div className="FilterableProductTable">
				<h1>IronStore</h1>
				<div className="SearchContainer">
					<h3>Search</h3>
					<SearchBar
						query={this.state.query}
						handleUpdate={query => this.handleSearch(query)}
					/>
					<div className="checkBoxDiv">
          <input
						className="checkBox"
            id="checkBox"
						type="checkbox"
						name="showOnlyInStock"
						onChange={e => this.handleChange(e)}
					/> 
          <label htmlFor="checkBox">Only Show Products in Stock</label>
          </div>
          
				</div>
				<ProductTable products={products} />
			</div>
		);
	}
}

class SearchBar extends Component {
	handleChange(e) {
		this.props.handleUpdate(e.target.value);
	}
	render() {
		return (
			<div className="SearchBar">
				<input
					type="text"
					name="query"
					value={this.props.query}
					onChange={e => this.handleChange(e)}
				/>
			</div>
		);
	}
}

class ProductTable extends Component {
	render() {
		return (
			<table className="ProductTable">
				<thead>
        <tr className="HeadRow">
					<th>Name</th>
					<th>Price</th>
				</tr>
        </thead>
        <tbody>
        {this.props.products.map(v => (
            <ProductRow price={v.price} name={v.name} />
          ))}
        </tbody>
          
			</table>
		);
	}
}

class ProductRow extends Component {
	render() {
		return (
			<tr className="ProductRow">
				<td>{this.props.name}</td> 
				<td>{this.props.price}</td>        
			</tr>
		);
	}
}

export default App;
