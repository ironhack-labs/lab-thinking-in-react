import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ data }) => (
	<div>
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>

                <ProductCategoryRow category='Sporting Goods' />

				{data.map((item, index) => (
                    item.category === 'Sporting Goods' ? <ProductRow key={index} item={item} /> : null
                        // <ProductCategoryRow category={item.category} /> 
                ))}
                
                <ProductCategoryRow category='Electronics' />

				{data.map((item, index) => (
                    item.category === 'Electronics' ? <ProductRow key={index} item={item} /> : null
                        // <ProductCategoryRow category={item.category} /> 
				))}
			</tbody>
		</table>
	</div>
);

export default ProductTable;
