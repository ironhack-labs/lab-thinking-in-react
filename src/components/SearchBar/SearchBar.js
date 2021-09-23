import React, { Component } from 'react'
import jsondata from '../../data.json'


export default class SearchBar extends Component {

    constructor() {
        super()

        this.state = {
            data: null,
            show: false,
            searchValue: ""
        }
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            ...this.state,
            searchValue: value
        })

        
    }

    filterProducts = (value) => {
        this.setState({
            ...this.state,
            data: jsondata.data.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
        })
    }



    render() {

        return (

            <input
                onChange={this.handleChange}
                
                value={this.state.searchValue}
                
                aria-label="buscar"
            />

      

            

        )
    }


}
