import React, { Component } from 'react';
import '../css/ProductRow.css';

class ProductRow extends Component {
	render() {
		return (
			<article className="media">
				<div className="name h4">
					<li style={{ color: this.props.productInfo.stocked ? 'white' : 'red' }}>
						{this.props.productInfo.name}
					</li>
				</div>
				<div className="price  h4">
					<li style={{ color: this.props.productInfo.stocked ? 'white' : 'red' }}>
						{this.props.productInfo.price}
					</li>
				</div>
			</article>
		);
	}
}

export default ProductRow;