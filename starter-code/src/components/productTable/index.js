import React, { Component } from 'react';
import SearchBar from './../searchBar';
import ItemList from './../itemsList';
import data from './../../data';
import './productTable.css';

export default class ProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsList: [...data.data],
			filteredItemsList: [...data.data],
			searchInput: '',
			checkBoxOutOfStock: false,
		};
	}
	updateSearchInput = (text) => {
		let clone = [...this.state.itemsList];
		let filteredList = [...clone];
		if (this.state.checkBoxOutOfStock) {
			filteredList = clone.filter((item) => {
				return (
					item.name.toUpperCase().includes(text.toUpperCase()) && item.stocked
				);
			});
		} else {
			filteredList = clone.filter((item) => {
				return item.name.toUpperCase().includes(text.toUpperCase());
			});
		}
		this.setState({ searchInput: text, filteredItemsList: filteredList });
	};

	updateCheckBox = async () => {
		await this.setState({ checkBoxOutOfStock: !this.state.checkBoxOutOfStock });

		this.updateSearchInput(this.state.searchInput);
	};
	render() {
		return (
			<div className="container fluid">
				<h1 className="has-text-centered">IronStore</h1>
				<SearchBar
					updateSearchInput={this.updateSearchInput}
					updateCheckBox={this.updateCheckBox}
				/>
				<ItemList itemsList={this.state.filteredItemsList} />
			</div>
		);
	}
}
