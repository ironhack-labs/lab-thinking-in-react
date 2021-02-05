import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			checked: false
		};
	}

	getSearch = searchTerm => {
		this.setState({
			searchTerm: searchTerm
		});
	};

	getCheckBox = isChecked => {
		this.setState({
			checked: isChecked
		});
	};

	render() {
		return (
			<div>
				<SearchBar
					search={this.getSearch}
					checkbox={this.getCheckBox}
				/>
				<ProductTable
					products={this.props.products}
					searchTerm={this.state.searchTerm}
					checkbox={this.state.checked}/>
			</div>
		);
	}
}