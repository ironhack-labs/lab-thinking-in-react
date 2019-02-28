import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {

	state = {
		products: [],
	}

	componentWillMount() {
		let {data} = this.props.products
		this.setState({products:data})
	}

	filterSearchBar = (x) => {
		let {data} = this.props.products
		let names = data.map(e=>e.name)
		let typedProducts = names.filter(name=>name.toLowerCase().includes(x.toLowerCase()))
		this.setState({products:typedProducts})
	}

	render () {
		console.log(this.state.products)
		return (
				<div>
					<h1>Iron Store</h1>
					<SearchBar filterFunction = {this.filterSearchBar}/>
					<ProductTable products = { this.state.products }/>
				</div>
		)
	}
}

export default FilterableProductTable