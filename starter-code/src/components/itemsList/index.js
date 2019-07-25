import React, { Component } from 'react';
import Item from './../item';
import './itemList.css';

export default class ItemsList extends Component {
	createlist = () => {
		return this.props.itemsList.map((item, i) => {
			return <Item key={i} itemInfo={item} />;
		});
	};
	render() {
		return (
			<div>
				<div className="has-text-centered list-headers">
					<h3>Name</h3>
					<h3>Price</h3>
				</div>
				{this.createlist()}
			</div>
		);
	}
}
