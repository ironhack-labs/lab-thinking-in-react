import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {
	return(
		<table className="table table-striped">
			<thead>
				<tr>
				<th scope="col">#</th>
				<th scope="col">Product</th>
				<th scope="col">Price</th>
				<th scope="col">Stock</th>
				</tr>
			</thead>
			<tbody>
			{
				products.map((product, idx) => {
					return(
						<ProductRow 
							key={product.id}
							idx={idx}
							{...product}
						/>
					)
				})
			}
			</tbody>
			</table>
	)
}

export default ProductTable;