import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: ""
        }
    }

    search(string) {
        this.setState({searchField: string})
        return this.props.stringForFilter(this.state.searchField)
    }

    render() {
        let { searchField } = this.state;
        return (
            <div>
                <input type="text" placeholder="Search..." value={searchField} onChange={(object) => this.search(object.target.value)} />
            </div>
        )

    }
}