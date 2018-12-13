import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ProductTable from './ProductTable';
import Data from './data.json';

class SearchBar extends Component {
	render() {
		return (
			<div>
				<div className="search-bar">
					<form>
						<input type="text" placeholder="im the search bar component" />
					</form>
				</div>
				<ProductTable />
			</div>
		);
	}
}

//       <producttable />

export default SearchBar;
