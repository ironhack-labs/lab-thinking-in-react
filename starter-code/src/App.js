import React, { Component } from 'react';
import './App.css';
import FiltrableProductTable from './components/FiltrableProductTable';

class App extends Component {
	render() {
		return (
			<div className="App">
				<FiltrableProductTable />
			</div>
		);
	}
}

export default App;
