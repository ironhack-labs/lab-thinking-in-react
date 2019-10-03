import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <form>
                <input type="search" placeholder="search" onChange={(e)=>this.props.updateSearch(e)}></input>
                <div className="checkbox">
                    <input type="checkbox" id="check" onChange={() => this.props.onStock()}></input>
                    <label htmlFor="check">Only show products on stock</label>
                </div>
                
                
            </form>
        )
    }
}
