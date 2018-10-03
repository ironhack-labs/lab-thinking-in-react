import React, { Component } from "react";
import ProductRow from "./ProductRow";

export default class ProductCategoryRow extends Component {
	constructor(props){
		super(props)
	}
	render() {
		const {category}=this.props.data[0]
		console.log(category)
    return (
		<li>{category}
			<ul>
				{this.props.data.map(p=>{
					return <ProductRow {...p}/>

				})}
			</ul>
		</li>
    );
  }
}
