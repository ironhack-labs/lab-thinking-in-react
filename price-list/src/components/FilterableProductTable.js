import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

export default class FilterableProductTable extends Component {
	constructor() {
		super();
		this.state = { data: data.data }
	}

	render() {
		const dataByCategory = {}
		this.state.data.forEach(pro => {
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
				<SearchBar />
				<ProductTable data={dataByCategory} />
			</section>
		)
	}
}