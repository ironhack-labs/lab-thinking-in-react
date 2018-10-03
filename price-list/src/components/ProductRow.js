import React, { Component } from "react";

export default class ProductRow extends Component {
	
	
	render() {
		const {name,price,stocked}=this.props
		return(
			<li className={stocked || "red" }>{name} {price} {stocked}</li>
		)
	}
}