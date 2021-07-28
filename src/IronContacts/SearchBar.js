import React, { Component } from 'react';


class SearchBar extends Component {

    state = {
        input: '',
        stock: false
    }

    handleSearch = (ev) => {

        this.setState({
            input: ev.target.value
        })
        this.props.filterProducts(this.state.input)
    }

    handleTitleInput = (event) => {
        event.preventDefault()
        this.setState({

            stock: event.target.checked

        })
    }

    render() {
        return (
            <div className="search-center">
                <div className="search">
                  
                        <input
                            className="search-input"
                            type="text"
                            onChange={this.handleSearch}
                            placeholder="Search Product ..."
                            value={this.state.input}

                        />
                        <div className="input-check">
                            <label> Only show products on stock  </label>
                            <input
                                onChange={this.handleTitleInput}
                                value={this.state.stock}
                                name="stock"
                                type="checkbox"
                            />
                        </div>
                   
                </div>
            </div>


        )
    }
}

export default SearchBar