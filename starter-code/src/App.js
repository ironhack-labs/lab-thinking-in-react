import React, { Component } from 'react';
import './css/App.css';
import FilterableProductTable from './components/FilterableProductTable';
import Header from './components/Header'

class App extends Component {
	render() {
		return (
			<div className="App">
        <Header />
				<FilterableProductTable />
			</div>
		);
	}
}

export default App;