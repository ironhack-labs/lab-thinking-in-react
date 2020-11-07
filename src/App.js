import React from 'react';
import logo from './logo.svg';
import data from './data.json';
import './App.css';
import 'bulma/css/bulma.min.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

function App() {
	return (
    	<div className="container center">
			<FilterableProductTable products={data} />
    	</div>
  	);
}

export default App;
