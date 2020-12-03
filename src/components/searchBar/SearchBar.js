import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react'
import data from '../../data.json'



export default class SearchBar extends Component {
       
     constructor() {
        super()
        this.state = {    
            search: '',
        }
     }
    
     handleNameChange = e => this.setState({ name: e.target.value })
    
    
    handleFormSubmit = e => {
        e.preventDefault()

        const value = e.target

        this.setState({
            search: value
        })
    }



        render(){
        return (

             <form onSubmit={this.handleFormSubmit}>
                <label>Título:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                <br /><br />

                <input type="submit" value="Buscar" />
            </form>
            
        )
    }
}



