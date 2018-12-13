import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import products from './data.json';
import SearchBar from './SearchBar';

class Main extends Component {
	state = {
		category: '',
		price: '',
		stocked: true,
		name: '',
		product: products.data
	};

	getProducts = () => {
		// let copyOfProducts = [...this.state.product]
		return this.state.product.map((eachProduct) => {
			return (
				<div className="columns items">
					

						
                        <div className="column">
                        {eachProduct.name} 
                        </div>
                        
                        <div className="column">
                        {eachProduct.price}
                        </div>


					
                    
				</div>
			);
		});
	};

	render() {
		return (
			<div className="main-div">

            
            <SearchBar />
				<div className="">
					
                            {this.getProducts()}
                        
				</div>
			</div>
		);
	}
}

//<searchbar />

export default Main;
