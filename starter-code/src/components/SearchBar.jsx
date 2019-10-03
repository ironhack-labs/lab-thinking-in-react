import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>

                <form >
                    <input
                        type="search"
                        name="search"
                        onChange={e => this.props.search(e)}
                    ></input>
                    <br />

                </form>
            </div>
        )
    }
}
