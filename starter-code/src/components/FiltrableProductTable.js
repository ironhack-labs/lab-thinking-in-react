import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FiltrableProductTable extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			search: {
				keyword: '',
				stocked: false,
			},
		};
	}

	searchChange = e => {
		let { search } = this.state;
		search.keyword = e.target.value.toLowerCase();
		this.setState({ search });
	};

	searchCheckbox = e => {
		let { search } = this.state;
		search.stocked = e.target.checked;

		this.setState({ search });
	};

	componentWillMount() {
		let { data } = this.state;
		this.setState({ data });

		console.log(data);
	}

	render() {
		let { data, search } = this.state;
		data = data.data.filter(item =>
			item.name.toLowerCase().includes(search.keyword),
		);
		search.stocked ? (data = data.filter(item => item.stocked)) : null;

		return (
			<div>
				<SearchBar
					searchChange   = {this.searchChange}
					searchCheckbox = {this.searchCheckbox}
				/>
				<ProductTable data={data} />
			</div>
		);
	}
}

export default FiltrableProductTable;
