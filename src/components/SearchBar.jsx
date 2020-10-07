import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        product : this.props.products,
        name : "",
    }


    handleChange = (evt) =>{
        const value = evt.target.value;
        const name = evt.target.name;
       
       
        this.setState({
        name: value,
        });

           
       const { valueInput } = this.props

       console.log("juste avant de voir le parent >>>>>>", valueInput);
       this.props.handleSearch(value);
    }

    render() {
       
        return (
            <div>  
                <h4>Search</h4>
                <input
                       onChange={this.handleChange}
                        value={this.valueInput}
                       id="name"
                        autoComplete="off"
                        className="input"
                        type="text"
                        name="name"
                    />
                
                <input type="checkbox"></input>
                <label>Only show products on stock</label>
            </div>
        )
    }
}