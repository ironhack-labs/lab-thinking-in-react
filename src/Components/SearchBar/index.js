import React, {Component} from "react";
import './style.css'

class SearchBar extends Component {
    state = {
        text: ''
    }
     handleText =async (event)=>{
        const newTxt = event.target.value;
        await this.setState({
            text: newTxt
        })
        this.props.handleFilter(this.state.text)
    }
    render(){
        return (
            <div className = 'search-bar'>
            <p>Search</p>
            <input type = 'text' value = {this.state.text} onChange={this.handleText}/>
            </div>
        )
    }
}

export default SearchBar