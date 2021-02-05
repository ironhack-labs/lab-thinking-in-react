import React from 'react';
import {Table} from 'react-bootstrap';
import ProductRow from './ProductRow';
import './ProductTable.css';

export default function ProductTable(props) {

	const filteredProducts = props.products.data.filter(product => {
		return product.name.toLowerCase().includes(props.searchTerm.toLowerCase());
	});

	const productsInStock = filteredProducts.filter(product => {
		return props.checkbox ? product.stocked === true : product.stocked === false || product.stocked === true;
	});

	const products = productsInStock.map(product => {
		return (
			<ProductRow
				id={product.id}
				name={product.name}
				price={product.price}
				category={product.category}
				stocked={product.stocked}/>
		);
	});

	return (
		<Table striped bordered hover responsive size="lg">
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
				{products}
				</tbody>
			</table>
		</Table>
	);
}