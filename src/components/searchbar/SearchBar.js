import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchInput: '',
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickHandler = (event) => {
        
    }

    render() {
        return (
        <div>
            <input type="text" name="searchInput" placeholder="Search" onChange={this.changeHandler} value={this.state.searchInput} />
        </div>
        );
    }

}

export default SearchBar;