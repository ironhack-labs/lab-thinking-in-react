import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="group-filter">
                <div className="group-filter__search">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={this.props.callback}
                    />
                </div>
                <div>
                    <input type="checkbox" onChange={this.props.inStock} />
                    <label>Show in stock products only</label>
                </div>
            </div>
        );
    }
}