import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';

// import './ProductTable.css';

class ProductTable extends Component {
	render() {
		const array = this.props.listproduct.map((product, idx) => {
			return <ProductRow productInfo={product} key={idx} />;
		});

		return (
			<div className="product-table">
				<article className="media-title">
					<div className="name-title">
						<h3>NAME</h3>
					</div>
					<div className="price-title">
						<h3>PRICE</h3>
					</div>
				</article>
				<div className="box">{array}</div>
			</div>
		);
	}
}

export default ProductTable;
