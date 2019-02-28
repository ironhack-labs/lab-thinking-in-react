import React from 'react'

class ProductRow extends React.Component {
	render () {
		return (
				<div className='row'>
					<p>{this.props.element.name}</p>
					<p>{this.props.element.price}</p>
				</div>
		)
	}
}

export default ProductRow