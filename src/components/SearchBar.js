
import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state= {
            stocked:true
        }
        this.search = this.search.bind(this)
    }
    search(e){
        console.log(e.target.value)
        this.props.callbackFunction(e.target.value)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.stocked.true === 'isStocked' ? target.checked : target.value;
        const stocked = target.stocked;
    
        this.setState({
          [stocked]: value
        });
      }
    render() {
        return (
            <form>            
            <label>SearchBar</label>
            <input
            type="text"
            name="search-bar"
            onChange={this.search}/>
            <label class="checkbox">
            <input  onChange={this.handleInputChange} checked={this.state.isStocked} type="checkbox">  Only show products on stock </input>
            </label>
           </form>
        
        )
    }
}
