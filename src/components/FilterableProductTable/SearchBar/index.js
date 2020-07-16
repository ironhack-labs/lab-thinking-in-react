import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            filter: "",
            stockFilter: false 
        }
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({[e.target.name]: value})
        if (e.target.type === "search") {
            this.props.onBarChange(e.target.value)
        } else if (e.target.type === "checkbox") {
            this.props.onCheckboxChange(e.target.value)
        }
    }  
    render() {
       
        return (
            <>
            <form>
                <input name="filter" onChange={this.handleChange} type="search" placeholder="Search..." value={this.state.filter} />
            </form>

            <form>
            <label> 
                <input name="stockFilter" type="checkbox" onChange={this.handleChange} checked={this.state.stockFilter}></input>
                Show products in stock
                </label>
            </form>
            </>
        )
    }

}

export default SearchBar