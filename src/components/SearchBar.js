
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }

    setInputValue = (event) => {

        this.setState({
            inputValue: event.target.value
        })

        this.props.fn(this.state.inputValue)
    }

    render() {

        return (
            <>
                <hr></hr>
                <h5>SearchBar</h5>
                <input type="text" style={{ display: 'block', width: '100%' }} value={this.state.inputValue} onChange={this.setInputValue}></input>
                <input type="checkbox" /> Only Show products on Stock

            </>
        )
    }

}

export default SearchBar
