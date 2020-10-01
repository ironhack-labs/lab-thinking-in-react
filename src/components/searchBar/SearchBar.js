import React, { Component } from 'react';

import './SearchBar.css'

class SearchBar extends Component {

    constructor() {

        super()
        this.state = {

            textValue: '',
            showStockProducts: false
        }

    }

    textChangeHandler = (e) => {

        this.setState({ textValue: e.target.value })

        this.props.filterMethod(e.target.value, this.state.showStockProducts)
    }

    showStockHandler = (e) => {

        this.setState({ showStockProducts: e.target.checked })

        this.props.filterMethod(this.state.textValue, e.target.checked)
    }

    render() {

        return (

            <div className='searcher'>

                <h3>Search</h3>

                <form>

                    <input className='text-input' type='text' name='name' placeholder='Search' onChange={this.textChangeHandler} />

                    <div>

                        <div className='check-line'>

                            <input type='checkbox' name='onStock' onChange={this.showStockHandler} />

                            <label>Only show products on stock</label>

                        </div>

                    </div>

                </form>

            </div>

        )

    }
}

export default SearchBar;