import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
        return (
            <div style={{ marginTop: 100 }}>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={this.props.callback}
                    />
                </div>

                <label>Show in stock products only</label>
                <input type="checkbox" onChange={this.props.inStock} />
            </div>
        );
    }
}

export default SearchBar;