import React from 'react';

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text" value={this.state.value} onChange={event => this.onChange(event)} />
                <input type="checkbox" id="onStock" onClick={(event => this.onClick(event))}/>
                <label htmlFor="onStock">Only show products on stock</label>
            </div>
        );
    }

    onChange(event) {
        this.setState({ value: event.target.value },
            () => this.props.searchMethod(this.state.value));
    }

    onClick(event) {
        this.props.filterMethod(event.target.checked);
    }
}

export default SearchBar;