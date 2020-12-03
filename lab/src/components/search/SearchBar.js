import React, { Component } from 'react'

class Search extends Component {
    constructor() { 
        super()
        this.state = {
            search:''
        }
    
    }
    handleInputChange = e => {
        const {  value } = e.target
        this.setState({ search: value })
        this.props.filter(this.state.search)
        
    }
    
     render() {
            return (
              <input name='name' value={this.state.search} onChange={this.handleInputChange} />
            )
        }
}
export default Search