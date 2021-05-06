import { Component } from "react";
import React from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            filter: "",
            hasStock: false
        }
    }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        // Computed property names
        this.setState({ [name]: value }, () => {
            this.getFilterWord()

        })
    }

    getFilterWord() {
        this.props.filterItem(this.state.filter, this.state.hasStock)

    }

    render() {
        return (
            <>
                <div>
                    <label>Filtro de Busqueda</label>
                    <input value={this.state.filter} onChange={e => this.handleInputChange(e)} type="text" name="filter"></input>
                </div>
                <div>
                    <label>Mostrar en Stock</label>
                    <input type="checkbox" name="hasStock" checked={this.state.hasStock} onChange={e => this.handleInputChange(e)}></input>
                </div>
            </>
        )
    }
}

export default SearchBar