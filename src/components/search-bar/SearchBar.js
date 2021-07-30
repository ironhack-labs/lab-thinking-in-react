
import React from 'react'
import { Component } from 'react';

class SearchBar extends Component {
    
    state = {
        product: {
            searchproduct:'',
            avalaibleonly: false
        }
    }

    handleInputs(event){
        const {name, value } = event.target
        this.setState(( prevState )  => ({
            ...prevState,
            [name] : value
        }))
    }

    render(){
        const { onSearch, onProducstAvalaible } = this.props
        const { searchproduct } = this.state
        return(
            <form>
            <div class="input-group mb-3">
                <input type="text" name="search" class="form-control" value={searchproduct} onChange={(event) => this.handleInputs(event), onSearch} placeholder="Search for a product" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="avalaibleonly" type="checkbox" value={true} id="flexCheckDefault" onChange={(event) => this.handleInputs(event), onProducstAvalaible}/>
                <label class="form-check-label" for="flexCheckDefault">
                    Show only products in stock
                </label>
            </div>
            </form>

        )
    }
}

export default SearchBar