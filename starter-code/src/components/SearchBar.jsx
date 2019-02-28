import React from 'react'

class SearchBar extends React.Component {

	typing = (e)=>{
		this.props.filterFunction(e.target.value)
	}

	render() {
		return (
				<div>
					<input onChange={this.typing} type="search" placeholder="Search" />
				</div>
		)
	}
}

export default SearchBar

