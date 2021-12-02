import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super()

        console.log("ESTA", props)

        this.state = {
            update: props.update
        }
    }

    handleChange = (e) => {
        let input = e.currentTarget.value.toLowerCase()
    
        let filteredProducts = this.props.products.filter(product => product.name.toLowerCase().includes(input))
    
        this.props.update(filteredProducts);
      }

    render() {
        return (
            <div>
                <input type="search" onChange={this.handleChange} value={this.state.name} name="name" />
            </div>
        )
    }
}
