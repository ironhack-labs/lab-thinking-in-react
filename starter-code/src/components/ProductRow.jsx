import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
	render() {
		return (
			<article className="media">
				<div className="name">
					<li>{this.props.productInfo.name}</li>
				</div>
				<div className="price">
					<li>{this.props.productInfo.price}</li>
				</div>
			</article>
		);
	}
}

export default ProductRow;
