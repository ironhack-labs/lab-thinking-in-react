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

    inputChangeHandler = (e) => {

        let newState = e.target.type === 'text' ? { textValue: e.target.value } : { showStockProducts: e.target.checked }

        this.setState(newState, () => this.props.filterMethod(this.state.textValue, this.state.showStockProducts))
    }

    render() {

        return (

            <div className='searcher'>

                <h3>Search</h3>

                <form>

                    <input className='text-input' type='text' name='name' placeholder='Search' onChange={this.inputChangeHandler} />

                    <div>

                        <div className='check-line'>

                            <input type='checkbox' name='onStock' onChange={this.inputChangeHandler} />

                            <label>Only show products on stock</label>

                        </div>

                    </div>

                </form>

            </div>

        )

    }
}

export default SearchBar;