import React, { Component } from 'react';


    class SearchBar extends Component {

        handleChange=event=> {
            this.props.setQuery(event.target.value)
            console.log("this is important")
        }
        render() {
            return (
                <div> 
                    <input type="text"
                        name="query"
                        value={this.props.query}
                        onChange={this.handleChange} 
                        placeholder="Search"/>
                </div>
            )
        }    
    }

    

export default SearchBar;