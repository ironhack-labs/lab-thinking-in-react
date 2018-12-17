import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import products from './data.json';

class ProductRow extends Component {
	render() {
		return <div>this is {products.category}</div>;
	}
}

export default ProductRow;
