import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"input" : ""
		}
	}

	handleChange(event) {
		this.setState( {"input" : event.target.value}, 
		this.props.updateTable(event.target.value)
		)
	}



	render() {
		return(
			<div className="searchContainer">
				<label htmlFor="searchBar">Search</label>
				<input type="search" className="searchBar" value={this.state.input} onChange={e => this.handleChange(e)} />
				<label htmlFor="checkBox" className="searchCheckBox">Only show products in stock</label>
				<input type="checkbox" className="checkBox"/>
			</div>
		)
	}
}