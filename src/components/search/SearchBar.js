import React, { Component } from 'react'

class SearchBar extends Component {



    render({handleChange} = this.props) {
        return (
            <div>
                <input placeholder="Search" onChange={(e) => handleChange(e)} />
            </div>   
        )
    }
}

export default SearchBar