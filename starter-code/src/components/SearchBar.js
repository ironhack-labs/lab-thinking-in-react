import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            stocked: false
        }
    }

    handleChange = elem => {
        let { name, value } = elem.target
        // if (name == 'stocked') value = elem.target.checked
        this.setState({ [name]: value }, () => this.props.searchBar(this.state.name));
    
    }

    render() {
        return (
            
            <div>
                <input name="name" type="text" placeholder="search" id='input1' value={this.state.name} onChange={this.handleChange}/>
                <input type="checkbox" id="input2" value={this.state.stocked} onChange={this.handleChange}/> <label for="input2">Only show products on stock</label>
            </div>
          
        )
    }
}
export default SearchBar