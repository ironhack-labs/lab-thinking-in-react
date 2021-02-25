import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        filterInput: '',
        inStockChecked: false
    }

    handleChange = (e) => {
        this.setState({
            filterInput: e.target.value
        })
        this.props.parentCallback(e.target.value)
    }

    handleChangeCheck = () => {
        this.setState({
            inStockChecked: !this.state.inStockChecked
        })
        this.props.parentCallbackCheck(!this.state.inStockChecked)
    }


    render() {
        return (
            <div>
                <div style={{display:"flex", flexDirection:"column", gap:"15px", fontSize:"24px", alignItems:"center", marginBottom:"20px"}}>
                    <label htmlFor="searchFieldProductName">Search</label>
                    <input style={{width:"80%", fontSize:"20px"}} id="searchFieldProductName" type="text" value={this.state.filterInput} onChange={this.handleChange}/>
                </div>
                <input type="checkbox" name="checkboxStock" id="checkboxStock" onChange={this.handleChangeCheck}/><label htmlFor="checkboxStock">Only show products on stock</label>
            </div>
        )
    }
}
