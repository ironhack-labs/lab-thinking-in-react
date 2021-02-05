import React from 'react';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<FilterableProductTable products={data}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
