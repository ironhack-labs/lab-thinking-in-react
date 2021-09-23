import React, { Component } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

export default class Searchbar extends Component {

    constructor(props){

        super(props)

        this.state = {
    
            searchValue: ""
        }

    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        }, () => this.props.filterProducts(value))
        
    }


    render() {
        return (
            <div>
                <InputGroup className="mb-3 mt-4">
                    <FormControl
                        onChange={this.handleChange}
                        name="searchValue"
                        value={this.state.searchValue}
                        placeholder="Buscar por título..."
                        aria-label="buscar"
                    />
                </InputGroup>
            </div>
        )
    }
}
