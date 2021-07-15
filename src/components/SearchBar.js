import React, { Component } from 'react';

class SearchBar extends Component {

    constructor() {
        super();

        this.state = {
            query: '',
            isChecked: false
        }
    }

    onChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [name]: value,
        }, ()=> {
            this.props.updateList(this.state);
        })

    }

    render = () => (
        <form>
            <label>Search</label>
            <input type="text" onChange={this.onChangeInput} name="query" value={this.state.name} />

            <br />

            <input type="checkbox" onChange={this.onChangeInput} name='isChecked' checked={this.state.isChecked} />
            <label>Only show products on stock</label>
        </form>
    )
}

export default SearchBar;