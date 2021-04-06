import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
	state = {
		search: '',
		products: [...this.props.products]
	}

	onSearch = async (e) => { 

        await this.setState({ 
            search: e.target.value
        });
        
        console.log('this.state.search', this.state.search);
    };

    filteredProducts = () => {
		let products = [...this.state.products];
		if (this.state.search !== '') {
			products = this.state.products.filter(({name}) => {
				return name.toLowerCase().includes(this.state.search.toLowerCase())
			})
		}
		return products;
    }

	render() {
		//console.log('FiltearableProductTable', this.state.products)
		let allProducts = this.filteredProducts();
		console.log('allProducts', allProducts)

		return (
			<>	
				<SearchBar 
					onSearch={this.onSearch}
					search={this.state.search}
				/>
				<ProductTable products={allProducts} />
			</>
		)
	}
}

export default FilterableProductTable;