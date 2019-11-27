import React, { Component } from 'react'

export class SearchBar extends Component {
    state= {products: this.props.products}
    // handleChange = evt => {
    //     const search = evt.target.value
    //         const copy = products.data
    //         const filteredArray =  copy.filter(eachV => {
    //             return eachV.name.toUpperCase().includes(search.toUpperCase());
    //         });
    //  this.setState({ products: filteredArray});
    //   };
    render() {
        return (
            <form onChange={this.handleChange} >
                <div>
                Search
                <input type="text"/>
                </div>
                <div>
                <input type="checkbox"/>
                Only show products on stock
                </div>
            </form>
        )
    
}}

export default SearchBar
