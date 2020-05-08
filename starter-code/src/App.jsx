import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Iron Store</h1>
				<FilterableProductTable products={data.data} />
			</div>
		);
	}
}

export default App;
