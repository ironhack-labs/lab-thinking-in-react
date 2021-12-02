import React from 'react';
import './SearchBar.css'


class SearchBar extends React.Component {
    constructor() {
        super()


        this.state = {
            productInput: ""
        }
    }


    handleChange= (e) => {
        let {name, value} = e.currentTarget

        this.setState( {
            [name]: value
        }, () => this.props.productWanted(this.state.productInput))
    }


    render() {
        return(
            <>
                <div className="searchbox-container">
                    <h4>Search</h4>
                    <input className="searchbox-input" onChange={this.handleChange} value={this.state.productInput} type='text' name='productInput'></input>
                </div>

            </>
        )
    }
}


export default SearchBar