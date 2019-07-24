import React, { Component } from 'react';

class SearchBar extends Component {
    sendSearchText = (ev) => {
        this.props.handleSearchText(ev.target.value)
    }

    sendCheckBoxValue = (ev) => {
        if(ev.target.checked) {
            this.props.handleCheckBox("checked")
        } else {
            this.props.handleCheckBox("")
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <p>Search</p>
                    <input type="text" onChange={this.sendSearchText} value={this.props.search}/>
                    <label>
                        <input type="checkbox" onChange={this.sendCheckBoxValue} name="stock" checked={this.props.checked} />
                        <span>Only show products in stock</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default SearchBar;