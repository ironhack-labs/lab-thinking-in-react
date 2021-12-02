import React from 'react';
import './App.css';
import {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';
import data from './data.json';

const products = data
const allProducts = products.data

class App extends Component {

	state = {
		products: products.data
	}

	searchProduct = (e) => {
		let searchValue = e.currentTarget.value;
		console.log(searchValue)
		let filteredProducts = allProducts.filter(data =>{
			return data.name.toLowerCase().includes(searchValue.toLowerCase())
		})
		
		this.setState({
			products: filteredProducts
		})
	}

	onStock = (e) => {
		let checked = e.currentTarget.checked
		if (checked){
			let filteredProducts = allProducts.filter(data => {
				return data.stocked === true
			})
			this.setState({
				products: filteredProducts
			})
		}
		else{
			this.setState({
				products: allProducts
			})
		}
	}

	render() {
		return (
		<div className="App">
			<SearchBar searchProduct={()=>this.searchProduct} onStock={()=>this.onStock}/>
			<ProductTable products={this.state.products}/>
		</div>
		)
  }

}

export default App;
