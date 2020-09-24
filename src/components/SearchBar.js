import React, { Component } from 'react';
import './SearchBar.css'




export default class SearchBar extends Component {
    
         handleChange = event => {
           this.props.setQuery(event.target.value)}
        
            checkBoxChange = event => {
                this.props.setStock(event.target.checked)
            }

    render(){
        //console.log('this is props in searchfield', props)
        return (
            <div>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.handleChange}
                />
                <label htmlFor="onStock?"></label>
                <input
            type="checkbox"
            name="onStock"
            id="onStock"
            checked={this.props.isInStore}
            onChange={this.checkBoxChange}
          />
                
            </div>
        )
    }
}

