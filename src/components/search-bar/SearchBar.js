
import React from 'react'
import { Component } from 'react';

class SearchBar extends Component {

    handleInputs(event){
        const {name, value } = event.target
        this.setState(( prevState )  => ({
            ...prevState,
            [name] : value
        }))
    }

    render(){
        return(

            <div class="input-group mb-3">
                <input type="text" name="search" class="form-control"  placeholder="Search for a product" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>
            </div>

        )
    }
}

export default SearchBar