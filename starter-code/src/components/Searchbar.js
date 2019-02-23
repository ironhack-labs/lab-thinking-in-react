import React, { Component } from 'react';

class Searchbar extends Component {

    onChange = (event) => {
        const value = event.target.value
        this.props.onSearch(value)
    }

    render() {

        this.props.blub // => 'bla'

        return (
            <div>

                <input onChange={this.onChange} type="text" placeholder="search" />

            </div>

        )
    }
}

export default Searchbar