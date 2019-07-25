import React, { Fragment } from 'react';
// import FilterableProductTable from './FilterableProductTable'

const ProductTable = (props) => {
  return(
		<Fragment>
		{
			props.products.map((el, idx) => {
				return (
					<div key={idx}>
						<h4>Name</h4>
						<p> {el.name}</p>
						<h4>Price</h4>
						<p>{el.price}</p>
					</div>
					)
				})
			}
		</Fragment>
	)
}

export default ProductTable;