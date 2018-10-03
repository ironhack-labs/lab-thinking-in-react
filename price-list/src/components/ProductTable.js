import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";

export default class ProductTable extends Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		console.log(this.props.data)
		const categories=[]
		for (let cat in this.props.data){
			categories.push(this.props.data[cat])
		}
		console.log(categories)
		return(
			<div>
				<p>
					<span>Name </span>
					<span>Price </span>
				</p>
				<ul>
				{categories.map(e=><ProductCategoryRow data={e}/>)}
				</ul>
			</div>
		)
	}
}

// {SportingGoods:{
// 	category:"Sporting Goods",
// 	datos:{ price: "$49.99", stocked: true, name: "Football"}
// }
// }