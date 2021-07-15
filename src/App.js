// import React from 'react';
import './App.css';
import React, { useState } from "react";
import jsondata from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
	// const [products, setProducts] = useState(jsondata);

	return (
		<div className="App">
			<FilterableProductTable products={ jsondata.data } />
		</div>
	);
}

export default App;