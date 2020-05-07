import React, { Component } from 'react';



class ProductRow extends Component {
    
	render() {
        console.log(this.props.stocked)
		return (
			<tr style={this.props.stocked ? {color: "black"} : {color: "red"}}>
				<td>{ this.props.name } </td>
				<td> { this.props.price } </td>
			</tr>
		);
	}
}


export default ProductRow;