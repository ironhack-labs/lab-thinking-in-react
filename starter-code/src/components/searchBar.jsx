import React, { Component } from 'react';

export default class Searchbar extends Component {

    render() {
        return (
            <React.Fragment>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={(e) => this.props.handleQuery(e.currentTarget.value)}
                    placeholder="search product"
                />
                <br />
                <label> In Stock: </label>
                <input
                    type="checkbox"
                    name="inStock"
                    onClick={event => this.props.checked(event.target.checked)}
                />
            </React.Fragment>
        );
    }
}

