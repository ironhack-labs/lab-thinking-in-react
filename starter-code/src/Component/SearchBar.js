import React, { Component } from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
          filter: "",
          filterStock: false
        }
    }


    handleChange = event => {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      this.setState({[event.target.name]: value})
      if (event.target.type === "search") {
          this.props.onBarChange(event.target.value)
      } else if (event.target.type === "checkbox") {
          this.props.onCheckboxChange(event.target.value)
      }
    }



      render() {

        return (
            <div>
            <form>
                <input name="filter" onChange={this.handleChange} type="search" placeholder="Search..." value={this.state.filter} />
            </form>

            <form>
            <label> 
                <input name="filterStock" type="checkbox" onChange={this.handleChange} checked={this.state.filterStock}></input>
                Show products in stock
                </label>
            </form>
            </div>
        )
    }

}

export default SearchBar