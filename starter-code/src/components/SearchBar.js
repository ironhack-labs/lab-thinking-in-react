import React, { Component } from "react"


class SearchBar extends Component{

    changeHandler = (e) => {
     
        let search = e.target.value.toLowerCase()
        this.props.cambiarProduct(search)
    }

render(){
    return(
        <div>
            <h4>Search</h4>
            <input onChange={this.changeHandler} type="text" placeholder="product" />
        </div>
    )
}

}
export default SearchBar

