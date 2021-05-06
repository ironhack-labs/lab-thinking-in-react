import React from 'react'

class SearchBar extends React.Component{

    state = {
        products: this.props.products,
        comparativeProducts: this.props.products
    }

    render(){
        return(
            <div className="search-bar">
                <input onChange={(e)=>this.props.filterSearch(e)} type="text" name="search-bar" placeholder="Search..."/>
            </div>
        )
    }
}

export default SearchBar
