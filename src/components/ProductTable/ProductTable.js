import './ProductTable.css';
import React from 'react';
import { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

 function ProductTable (props) {

		return (
			<div className="product-table">
				<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody> 
							{props.products.map((product, index) => <ProductRow key={index} id={product.id} name={product.name} price={product.price}/>)}
						</tbody>
				</table>
				
			</div>
		)
	
}

export default ProductTable;
