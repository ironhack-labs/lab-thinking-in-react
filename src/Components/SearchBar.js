import React, { Component } from 'react'

export default class Searchbar extends Component {

    render() {
        return (
            <div>

                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden"></span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search"
                        name="s"
                    />
                    <br />
                    <label>
                        <input type="checkbox" value="" />Only show products on Stock
                    </label>
                </form>

            </div>
        )
    }
}
