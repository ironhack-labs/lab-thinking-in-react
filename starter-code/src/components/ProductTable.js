import React from 'react';
import bulma from 'bulma';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
	console.log('Props en product table', props);

	const products = Object.values(props);
	return (
		<main>
			<table className="table is-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{products.map((product, idx) => <ProductRow key={idx} {...product} />)}</tbody>
			</table>
		</main>
	);
};

export default ProductTable;
