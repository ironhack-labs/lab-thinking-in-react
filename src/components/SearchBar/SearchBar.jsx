import React, { Component } from 'react'

export default class SearchBar extends Component {
    // state ={
    //     search: ""
    // }
   
//     changeHandler = (event) =>{
// this.setState({
//     search: event.target.value
// })
//     }

    render() {
        // console.log("Searchbar data", this.props.productsArray)
        // console.log(this.state.search)
        return (
            <div>
                <h2>Search</h2>
                <input type="text" name="search" value={this.props.searchST} onChange={(event) => this.props.updateSearch(event.target.value)} />
            </div>
        )
    }
}
