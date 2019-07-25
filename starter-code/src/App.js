import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/productTable';
import 'bulma/css/bulma.css';

class App extends Component {
	render() {
		return (
			<div>
				<ProductTable />
			</div>
		);
	}
}

export default App;
