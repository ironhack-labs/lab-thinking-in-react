import React from 'react';

class SearchBar extends React.Component {
    state = {
        value: '',
        checked: false
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
            () => this.props.searchMethod(this.state.value, this.state.checked));
    }

    onClick(event) {
        this.setState({ checked: event.target.checked },
            () => this.props.searchMethod(this.state.value, this.state.checked));
    }
}

export default SearchBar;