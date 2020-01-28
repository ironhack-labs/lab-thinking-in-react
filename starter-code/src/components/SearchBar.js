import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleInput = (event) => {
        this.props.searchHandle(event.target.value); //value property implicit available
    }

    handleStock = (event) => {
        this.props.stockedHandle(event.target.checked); //checked implicit available
    }

    render() {
        //console.log(this.state.stocked);
        return (
            <div>
                <div className="row">
                    <input type="text" name="search" onChange={this.handleInput} style={{ width: "80%" }}/><br />
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="stocked" onChange={this.handleStock} /><br />
                </div>
            </div>
        )
    }
}