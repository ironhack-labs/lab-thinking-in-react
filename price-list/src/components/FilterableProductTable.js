import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

export default class FilterableProductTable extends Component {
	constructor() {
		super();
		this.state = { data: data.data,dataFiltered:data.data,checked:false,search:"" }
	}
	filterList=(search)=>{
		this.setState({search})
	}
	onlyStock=(checked)=>{
		this.setState({checked})
	}
	filterData=(data)=>{
		const dataFilter= data.filter(p=>{
				if(this.state.checked && !p.stocked) return false
				return true 
			}).filter(p=>{
				return p.name.toLowerCase().includes(this.state.search.toLowerCase())
			})
		return dataFilter
	}
	render() {
		const dataFiltered=this.filterData(this.state.data)
		const dataByCategory = {}
		dataFiltered.forEach(pro => {
			let categoryObj = pro.category.replace(" ", "")
			if (!dataByCategory[categoryObj]) dataByCategory[categoryObj] = []
			dataByCategory[categoryObj].push({
				category: pro.category,
				name: pro.name,
				stocked: pro.stocked,
				price: pro.price
			})
		});
		return (
			<section>
				<p>FilterableProductTable</p>
				<SearchBar onOnlyStock={this.onlyStock} onFilterList={this.filterList}/>
				<ProductTable data={dataByCategory} />
			</section>
		)
	}
}