import React from 'react'
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
	render () {
		return (
			<div>
				<div className="row">
					<h3><strong>Name</strong></h3>
					<h3><strong>Price</strong></h3>
				</div>
				<div>
					{/*{products.map((e, index)=>{*/}
						{/*return (*/}
								{/*<ProductRow key={index} element={e}/>*/}
					{/*)})}*/}
				</div>
			</div>
		)
	}
}

export default ProductTable