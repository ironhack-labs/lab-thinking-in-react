import React, { Component } from 'react'


class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            inputSearch: ""
        }
    }


    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value },
            () => this.props.handleSearch(this.state.inputSearch)
        )
    }

    render() {
        return (
            //aqui llamariamos a product list
            <>
                <label>
                    Buscar:
                <input name="inputSearch" type="text" value={this.state.inputSearch} onChange={this.handleInputChange} />
                </label> <br></br>
            </>
        )
    }
}

export default Navigation


