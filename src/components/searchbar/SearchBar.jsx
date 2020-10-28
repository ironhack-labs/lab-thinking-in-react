import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        search: '',
        inStock: false
    }

    changeHandler = (e) => {
        let {name, value, type} = e.target
        if(type === 'checkbox') {
            value = e.target.checked;
        }

        this.setState({ [name]: value}, this.handleSubmit)
        this.handleSubmit()
    }

    handleSubmit = () => {
        this.props.searchTerm(this.state)
        // this.props.inStock(this.state.inStock)
    }

    render() {
        return (
            <div>
                <p>Search</p>
                <form >
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search..." 
                        value={this.state.search}
                        onChange={this.changeHandler}
                    />

                    <input 
                        type="checkbox" 
                        name="inStock" 
                        id="inStock"  
                        value={this.state.inStock} 
                        onChange={this.changeHandler}
                     
                     />
                     <p>Only show products on stock</p>
                </form>
            </div>
        )
    }
}
