import React, { Component } from "react";

export default class SearchBar extends Component {
	constructor(){
		super()
		this.state={search:""}
	}
	onFilter=(e)=>{
		this.props.onFilterList(e.target.value)
	}
	onlyStock=(e)=>{
		this.props.onOnlyStock(e.target.checked)
	}
	render() {
		return (
		<div>
			<input onChange={this.onFilter} type="search" name="" id="" placeholder="Search..." />
			<input onChange={this.onlyStock} type="checkbox" name="" id="" />
			<label htmlFor="">Only show products in stock</label>
		</div>
		);
	}
}
