// import React from 'react';
import './App.css';
import React, { Component } from "react";
import jsondata from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
	state = {
		query: '',
		stock: false,
	}

	setQuery = event => {
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div className="App">
				<h1>IronStore</h1>
				<FilterableProductTable products={jsondata.data} state={this.state} setQuery={this.setQuery} />
			</div>
		);
	}
}

export default App;