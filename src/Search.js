import React from 'react';

export default class Search extends React.Component {


    handleChange = event => {

        this.props.setQueryProp(event.target.value)
    }

    handleCheck = event => {

        this.props.setQueryStock(event.target.checked)
    }

    render() {
        return (
            <div>
                <label htmlFor="search">Search
        </label>
                <input type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.handleChange} />
                <label htmlFor="checkbox">Only show products on stock</label>
                <input type="checkbox"
                    name="checkbox"
                    checked={this.props.checked}
                    onChange={this.handleCheck} />
            </div>
        )
    }
}
