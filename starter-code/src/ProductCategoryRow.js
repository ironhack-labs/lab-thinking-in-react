import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ProductRow from './ProductRow';
import products from './data.json';

class ProductCategoryRow extends Component {
	render() {
		return (
			<div>
				<ProductRow />
			</div>
		);
	}
}

//<productRow />

export default ProductCategoryRow;
