import React, { Component } from 'react'

export default class SearchBar extends Component {

    render () {
        return (
            <>
                <h4>Search</h4>
                <form style={{width: '100%', margin: '10px'}}>
                        <label htmlFor="search"></label>
                        <input
                        style={{width: '90%', height: '25%', marginLeft: '20px'}}
                        type="text"
                        name="search"
                        value={this.props.query}
                        onChange={this.props.handleChange} />
  
                </form>
                <div>
                    <input
                    type='checkbox'
                    name='stocked'
                    id='stocked'
                    checked={this.props.stocked}
                    onChange={this.props.handleInputChange}
                    />
                    <label htmlFor="stocked" style={{marginLeft: '20px', marginRight: '5px'}}>
                    Only show products on stock</label>
                </div>
            </>
        )
    }
}