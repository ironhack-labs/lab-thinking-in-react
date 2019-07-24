import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
constructor(props){
    super(props)
}
    render() {
        return (
    <div className = "searchbar-check">

<div className="Search">
    <input onChange={(e)=>{this.props.change(e.target.value)}} type="text" placeholder="Search" />
</div> 
<label>In Stock? :</label> 
<input type="checkbox" value="In Stock" />
    </div>

        );
    }
}

export default SearchBar;

