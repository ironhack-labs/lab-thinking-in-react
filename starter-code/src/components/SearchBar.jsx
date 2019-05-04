import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"input" : "",
		}
	}

	handleSearch = (event) => {
		this.setState( {"input" : event.target.value}, () => {
			this.props.updateTable(this.state.input)
		}
		)
			console.log("searchTerm: ", this.state.input)
	}

	handleCheck = (event) => {
		this.setState( {"inStock": true}, () => {
			this.props.stockFilter(true)
		})
	}

	render() {
		return(
			<div className="searchContainer">
				<label htmlFor="searchBar">Search</label>
				<input type="search" className="searchBar" value={this.state.input} onChange={(e) => this.handleSearch(e)} />
				<label htmlFor="checkBox" className="searchCheckBox">Only show products in stock</label>
				<input type="checkbox" className="checkBox" onChange={(e) => this.handleCheck(e)} />
			</div>
		)
	}
}