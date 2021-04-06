import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
	state = {
		search: '',
		products: [...this.props.products],
		checkStock: null,
	}

	onSearch = async (e) => { 
        await this.setState({ 
            search: e.target.value
        });
    };

    filteredProducts = () => {
		let products = [...this.state.products];
		if (this.state.search) {
			if (this.state.checkStock) {
				products = this.filterOnStock().filter(({name}) => {
					return name.toLowerCase().includes(this.state.search.toLowerCase())
				})
			} else {
				products = this.state.products.filter(({name}) => {
					return name.toLowerCase().includes(this.state.search.toLowerCase())
				})
			}
		} 
		return products;
    }

	checkStock = async (e) => {
		if (this.state.checkStock) {
			await this.setState({
				checkStock: null
			})
		} else {
			await this.setState({
				checkStock: e.target.value
			})
		}
	}

	filterOnStock = () => {
		let products = [...this.state.products];
		if (this.state.checkStock) {
			products = this.state.products.filter(({stocked}) => stocked)
		} 
		return products;
	}

	render() {
		let allProducts = this.filteredProducts();

		if (this.state.checkStock && this.state.search === '') {
			allProducts = this.filterOnStock();
		}

		return (
			<>	
				<SearchBar 
					onSearch={this.onSearch}
					search={this.state.search}
					checkStock={this.checkStock}
				/>
				<ProductTable products={allProducts} />
			</>
		)
	}
}

export default FilterableProductTable;